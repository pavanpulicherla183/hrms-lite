import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
})
export class EmployeeList implements OnInit {

  employees: any[] = [];

  constructor(
    private api: ApiService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.api.getEmployees().subscribe({
      next: (data: any) => {
        this.employees = data;

        // Force Angular to update the UI immediately
        this.cd.detectChanges();
      },
      error: () => {
        alert('Error loading employees');
      }
    });
  }

  deleteEmployee(id: number) {
    if (confirm('Delete this employee?')) {
      this.api.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

}