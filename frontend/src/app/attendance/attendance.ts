import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class Attendance implements OnInit {

  employees: any[] = [];
  records: any[] = [];

  attendance = {
    employee: '',
    date: '',
    status: 'Present'
  };

  constructor(
    private api: ApiService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
  this.loadEmployees();
  this.loadAttendance();

  // listen for employee updates
  this.api.employeeUpdated.subscribe(() => {
    this.loadEmployees();
  });
}

  loadEmployees() {
    this.api.getEmployees().subscribe((data:any) => {
      this.employees = data;
      this.cd.detectChanges();
    });
  }

  loadAttendance() {
    this.api.getAttendance().subscribe((data:any) => {
      this.records = data;
      this.cd.detectChanges();
    });
  }

  markAttendance() {

    this.api.markAttendance(this.attendance).subscribe(() => {

      alert("Attendance marked successfully");

      this.loadAttendance();   // refresh table immediately

      this.attendance = {
        employee: '',
        date: '',
        status: 'Present'
      };

    });

  }

}