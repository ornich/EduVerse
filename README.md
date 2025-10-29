#EduVerse

📘 Description

EduVerse is an online studying platform designed to connect students and teachers in a unified digital environment.
It provides an easy-to-use interface for course management, learning, and teaching, with separate dashboards for both students and instructors.

EduVerse allows teachers to create and manage courses, while students can enroll, view content, and track progress — making online education more interactive and accessible.

✨ Features

👨‍🏫 Teacher Dashboard – Manage courses, upload content, and monitor enrolled students.

🎓 Student Dashboard – View available courses, enroll, and access study materials.

🔐 Authentication System – Secure login and registration for users.

🗂️ Course Management – Create, edit, delete, and view courses easily.

🧩 RESTful API – Backend built using Django REST Framework for scalability.

📊 Interactive UI – Clean, modern, and responsive design for smooth navigation.

🛠️ Tech Stack

Backend: Django, Django REST Framework
Frontend: HTML, CSS, JavaScript
Database: MySQL (configurable)
Language: Python 3

🚀 How to Run

Clone or extract the project.

Navigate to the backend directory:

cd EduVerse-main/backend


Install dependencies:

pip install -r requirements.txt


Run migrations:

python manage.py migrate


Start the server:

python manage.py runserver


Open your browser and visit:
👉 http://127.0.0.1:8000/

🧩 Project Structure
EduVerse-main/
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── courses/          → Handles course logic & APIs
│   ├── eduverse/         → Project settings and URLs
│   └── ...
│
└── frontend/ (optional if added)
    ├── index.html        → Main homepage/dashboard
    ├── login.html        → User login page
    └── ...

💡 Future Enhancements

Add student progress tracking & grading

Implement video lecture uploads

Integrate chat or discussion forums

Add AI-based course recommendations

📜 License

This project is open-source but restricted to only the creators and modratore of the project.
