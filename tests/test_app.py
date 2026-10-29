
import unittest

from app.app import app


class StudentOSTests(unittest.TestCase):

    def setUp(self):
        app.config["TESTING"] = True
        self.client = app.test_client()

    def test_homepage_loads(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"StudentOS", response.data)

    def test_health_endpoint(self):
        response = self.client.get("/health")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["status"], "healthy")

    def test_students_api(self):
        response = self.client.get("/api/students")
        self.assertEqual(response.status_code, 200)

        students = response.get_json()
        self.assertIsInstance(students, list)
        self.assertGreater(len(students), 0)

        self.assertIn("name", students[0])
        self.assertIn("attendance", students[0])
        self.assertIn("score", students[0])


if __name__ == "__main__":
    unittest.main()