import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { StudentService } from 'src/app/service/student-service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() selectedStudent: any;
  studentForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    address: ['', Validators.required],
    dob: ['', Validators.required]
  });
  addToStudents: Subject<any>;
  selectedStudentData: Subscription;
  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.addToStudents = this.studentService.refreshStudentsData;
  }

  ngOnInit(): void {
    this.selectedStudentData = this.studentService.selectedStudentData.subscribe((selectedData) => {
      this.fillData(selectedData);
    });
  }

  addStudent() {
    // TODO: Use EventEmitter with form value
    console.log(this.studentForm.value);
    this.studentService.addStudent$(this.studentForm.value).subscribe(response => {
      console.log(response);
      this.addToStudents.next();
    });
  }

  fillData(student: any) {
    console.log("SelectedStudent", student);
    this.studentForm.setValue(student);
  }

  updateStudent() {
    this.studentService.updateStudent$(this.studentForm.value).subscribe(response => {
      console.log(response);
      this.addToStudents.next();
    });
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent$(studentId).subscribe(response => {
      console.log(response);
      this.addToStudents.next();
    })
  }

}
