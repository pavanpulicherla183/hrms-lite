# HRMS Lite

HRMS Lite is a lightweight Human Resource Management System built using Angular and Django REST Framework.  
The application allows an admin to manage employee records and track daily attendance.

---

## Features

### Employee Management
- Add a new employee
- View list of employees
- Delete an employee

### Attendance Management
- Mark attendance for employees
- View attendance records

---

## Tech Stack

### Frontend
- Angular
- Bootstrap

### Backend
- Django
- Django REST Framework

### Database
- SQLite

---

## Project Structure

```
hrms-lite
│
├── backend
│   ├── hrms_backend
│   ├── employees
│   ├── manage.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── angular.json
│   └── package.json
```

---

## Running the Project Locally

### Backend Setup

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### Frontend Setup

```
cd frontend
npm install
ng serve
```

Frontend runs on:

```
http://localhost:4200
```

---

## Assumptions

- Single admin user (no authentication required)
- Department field is optional
- Employee ID must be unique
- Email must be valid and unique

---

## Future Improvements

- Attendance filtering
- Dashboard summary
- Authentication for admin users