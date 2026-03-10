# HRMS Lite

A lightweight Human Resource Management System built with Angular and Django REST Framework.

## Features

- Add Employee
- View Employees
- Delete Employee
- Mark Attendance
- View Attendance Records

## Tech Stack

Frontend:
Angular

Backend:
Django REST Framework

Database:
SQLite

Deployment:
Frontend: Vercel
Backend: Render

## Run Locally

Backend:

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Frontend:

npm install
ng serve

## Assumptions

- Single admin user
- No authentication required