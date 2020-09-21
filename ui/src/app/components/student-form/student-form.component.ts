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
  isAdd: boolean;
  isUpdate: boolean;
  isDelete: boolean;
  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.isAdd = true;
    this.isUpdate = false;
    this.isDelete = false;
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
    this.resetForm();
  }

  fillData(student: any) {
    console.log("SelectedStudent", student);
    this.studentForm.setValue(student);
    this.isUpdate = true;
    this.isDelete = true;
    this.isAdd = false;
  }

  resetForm() {
    this.isAdd = true;
    this.isUpdate = false;
    this.isDelete = false;
    this.studentForm.reset();
  }

  updateStudent() {
    this.studentService.updateStudent$(this.studentForm.value).subscribe(response => {
      console.log(response);
      this.addToStudents.next();
    });
    this.resetForm();
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent$(studentId).subscribe(response => {
      console.log(response);
      this.addToStudents.next();
    });
    this.resetForm();
  }

  ngOnDestroy() {
    this.selectedStudentData.unsubscribe();
  }

}
