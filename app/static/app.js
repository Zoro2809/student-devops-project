
const state = {
    students: [],
    search: "",
    department: ""
};

const palette = ["#7065e2", "#40a9a0", "#e8b65c", "#e78b9a", "#6497e8"];

const $ = (selector) => document.querySelector(selector);

function initials(name) {
    return name.split(" ").map(part => part[0]).slice(0, 2).join("").toUpperCase();
}

function slug(value) {
    return value.toLowerCase().replace(/\s+/g, "-");
}

function getFilteredStudents() {
    return state.students.filter(student => {
        const matchesSearch =
            `${student.name} ${student.department} ${student.year}`
                .toLowerCase().includes(state.search.toLowerCase());

        const matchesDepartment =
            !state.department || student.department === state.department;

        return matchesSearch && matchesDepartment;
    });
}

function renderMetrics() {
    const students = state.students;
    const total = students.length;

    $("#total-students").textContent = total;
    $("#nav-count").textContent = String(total).padStart(2, "0");
    $("#record-count").textContent = total;
    $("#donut-total").textContent = String(total).padStart(2, "0");
    $("#department-count").textContent =
        new Set(students.map(student => student.department)).size;

    $("#avg-score").textContent = total
        ? Math.round(students.reduce((sum, student) => sum + student.score, 0) / total)
        : "0";

    $("#avg-attendance").textContent = total
        ? Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / total)
        : "0";
}

function renderChart() {
    const chart = $("#score-chart");

    chart.innerHTML = state.students.map((student, index) => `
        <div class="chart-column" title="${student.name}: ${student.score}/100">
            <div class="chart-bar"
                 data-score="${student.score}"
                 style="height:${student.score}%;animation-delay:${index * 70}ms">
            </div>
            <span class="chart-label">${student.name.split(" ")[0]}</span>
        </div>
    `).join("");
}

function renderDepartments() {
    const counts = {};

    state.students.forEach(student => {
        counts[student.department] = (counts[student.department] || 0) + 1;
    });

    const entries = Object.entries(counts);
    const total = state.students.length || 1;
    let offset = 0;

    const segments = entries.map(([name, count], index) => {
        const start = offset;
        offset += count / total * 100;
        return `${palette[index % palette.length]} ${start}% ${offset}%`;
    });

    $("#department-donut").style.background =
        `conic-gradient(${segments.join(", ")})`;

    $("#department-legend").innerHTML = entries.map(([name, count], index) => `
        <div class="department-row">
            <span class="dept-dot" style="background:${palette[index % palette.length]}"></span>
            <span>${name}</span>
            <strong>${count}</strong>
        </div>
    `).join("");

    const filter = $("#department-filter");
    const currentValue = state.department;

    filter.innerHTML = '<option value="">All departments</option>' +
        entries.map(([name]) =>
            `<option value="${name}">${name}</option>`
        ).join("");

    filter.value = currentValue;
}

function renderStudents() {
    const students = getFilteredStudents();
    const table = $("#student-table");

    if (!students.length) {
        table.innerHTML = `
            <tr><td colspan="6" class="empty-cell">
                No matching student records found.
            </td></tr>`;
    } else {
        table.innerHTML = students.map(student => `
            <tr>
                <td>
                    <div class="student-cell">
                        <div class="student-avatar">${initials(student.name)}</div>
                        <div>
                            <div class="student-name">${student.name}</div>
                            <div class="student-id">STU-${String(student.id).padStart(3, "0")}</div>
                        </div>
                    </div>
                </td>
                <td>${student.department}</td>
                <td>${student.year}</td>
                <td>
                    <div class="attendance-cell">
                        <div class="attendance-track">
                            <div class="attendance-fill" style="width:${student.attendance}%"></div>
                        </div>
                        <span>${student.attendance}%</span>
                    </div>
                </td>
                <td><span class="score-pill">${student.score}</span></td>
                <td><span class="status-pill ${slug(student.status)}">${student.status}</span></td>
            </tr>
        `).join("");
    }

    $("#table-summary").textContent =
        `Showing ${students.length} of ${state.students.length} student records`;
}

async function loadStudents() {
    const table = $("#student-table");

    try {
        const response = await fetch("/api/students");

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const students = await response.json();

        if (!Array.isArray(students)) {
            throw new Error("Invalid student data");
        }

        state.students = students;
        renderMetrics();
        renderChart();
        renderDepartments();
        renderStudents();
    } catch (error) {
        console.error("Could not load student records:", error);
        table.innerHTML = `
            <tr><td colspan="6" class="empty-cell">
                Could not load student records. Please refresh the page.
            </td></tr>`;
        $("#table-summary").textContent = "Unable to load records";
    }
}

$("#student-search").addEventListener("input", event => {
    state.search = event.target.value;
    renderStudents();
});

$("#department-filter").addEventListener("change", event => {
    state.department = event.target.value;
    renderStudents();
});

$("#clear-filters").addEventListener("click", () => {
    state.search = "";
    state.department = "";
    $("#student-search").value = "";
    $("#department-filter").value = "";
    renderStudents();
});

$("#export-btn").addEventListener("click", () => {
    const students = getFilteredStudents();
    const columns = ["id", "name", "department", "year", "attendance", "score", "status"];
    const escapeCSV = value => `"${String(value).replace(/"/g, '""')}"`;

    const csv = [
        columns.join(","),
        ...students.map(student =>
            columns.map(column => escapeCSV(student[column])).join(",")
        )
    ].join("\r\n");

    const blob = new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "student-records.csv";
    link.click();
    URL.revokeObjectURL(url);
});

loadStudents();
