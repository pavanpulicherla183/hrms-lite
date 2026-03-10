import { Component, signal } from '@angular/core';
import { EmployeeFormComponent } from './employees/employee-form/employee-form';
import { EmployeeList } from './employees/employee-list/employee-list';
import { Attendance } from './attendance/attendance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeFormComponent, EmployeeList, Attendance],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HRMS Lite');
}