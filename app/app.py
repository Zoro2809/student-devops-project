
from flask import Flask, jsonify, render_template

app = Flask(__name__)

STUDENTS = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "department": "Software Engineering",
        "year": "Final Year",
        "attendance": 94,
        "score": 88,
        "status": "Excellent",
    },
    {
        "id": 2,
        "name": "Ananya Patel",
        "department": "Computer Engineering",
        "year": "Third Year",
        "attendance": 91,
        "score": 92,
        "status": "Excellent",
    },
    {
        "id": 3,
        "name": "Rohan Mehta",
        "department": "Information Technology",
        "year": "Final Year",
        "attendance": 82,
        "score": 76,
        "status": "Good",
    },
    {
        "id": 4,
        "name": "Ishita Verma",
        "department": "Software Engineering",
        "year": "Second Year",
        "attendance": 97,
        "score": 95,
        "status": "Excellent",
    },
    {
        "id": 5,
        "name": "Kabir Singh",
        "department": "Computer Engineering",
        "year": "Third Year",
        "attendance": 78,
        "score": 68,
        "status": "Needs Attention",
    },
    {
        "id": 6,
        "name": "Meera Joshi",
        "department": "Information Technology",
        "year": "Final Year",
        "attendance": 89,
        "score": 84,
        "status": "Good",
    },
]


@app.route("/")
def dashboard():
    return render_template("index.html")


@app.route("/api/students")
def get_students():
    return jsonify(STUDENTS)


@app.route("/health")
def health():
    return jsonify({"status": "healthy"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
