import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://hrms-backend-xnfu.onrender.com/api';

  // event to notify employee list update
  employeeUpdated = new Subject<void>();

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + 'employees/');
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'employees/', data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'employees/' + id + '/');
  }

  markAttendance(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'attendance/', data);
  }

  getAttendance(): Observable<any> {
    return this.http.get(this.baseUrl + 'attendance/');
  }

}