import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../lib/api/api-service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  addSudent = "/add-student";
  getStudents = "/students";
  updateStudent = "/updateStudent";
  deleteStudent = "/deleteStudentById";
  public refreshStudentsData: Subject<any> = new Subject();
  public selectedStudentData: Subject<any> = new Subject();
  constructor(private readonly apiService: ApiService) { }

  addStudent$(student: any): Observable<any> {
    const url = this.addSudent;
    return this.apiService.post$<any>(url, student);
  }

  getStudents$(): Observable<any> {
    const url = this.getStudents;
    return this.apiService.get$<any>(url, {});
  }

  updateStudent$(student: any): Observable<any> {
    const url = this.updateStudent;
    return this.apiService.put$<any>(url, student);
  }

  deleteStudent$(studentId: number): Observable<any> {
    const url = this.deleteStudent + '/' +studentId;
    return this.apiService.delete$<any>(url, {});
  }

  convertDateFormat(date) {
    const d = new Date(date);
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
  }

}
