import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeFormComponent {

  @Output() employeeAdded = new EventEmitter<void>();

  employee = {
    employee_id: '',
    full_name: '',
    email: '',
    department: ''
  };

  constructor(private api: ApiService) {}

  addEmployee() {

    this.api.addEmployee(this.employee).subscribe({

      next: () => {

        alert("Employee Added Successfully");

        this.employeeAdded.emit();   // notify parent

        this.employee = {
          employee_id: '',
          full_name: '',
          email: '',
          department: ''
        };

      },

      error: (err) => {

        if (err.status === 400 && err.error) {

          if (err.error.employee_id) {
            alert("Employee ID already exists");
            return;
          }

          if (err.error.email) {

            const emailMsg = err.error.email[0];

            if (emailMsg.includes("valid")) {
              alert("Please enter a valid email address");
              return;
            }

            if (emailMsg.includes("already")) {
              alert("Email already exists");
              return;
            }
          }

        }

        else {
          alert("Something went wrong. Try again.");
        }

      }

    });

  }

}