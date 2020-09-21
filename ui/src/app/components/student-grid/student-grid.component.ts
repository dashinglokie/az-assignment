import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { StudentService } from 'src/app/service/student-service';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss']
})
export class StudentGridComponent implements OnInit, AfterViewInit {
  refreshStudentsData: Subscription;
  studentSelected: Subject<any>;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  resultData = [];
  displayColumns: string[] = ['name', 'address', 'dob'];
  newdisplayColumns: string[] = ['Name', 'Address', 'DOB'];

  constructor(private studentService: StudentService) {
    this.studentSelected = this.studentService.selectedStudentData;
  }

  ngOnInit(): void {
    this.refreshStudentsData = this.studentService.refreshStudentsData.subscribe(() => {
      this.getStudentList();
    });
    this.getStudentList();
    this.dataSource.data = this.resultData;
    this.dataSource.paginator = this.paginator;
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStudentList() {
    // this.studentService.getStudents$().subscribe(response => {
    //   console.log("Response", response);
    //   this.resultData = response;
    //   this.dataSource.data = this.resultData;
    // });
    this.resultData = [
      { id: 1, name: "lokie", address: "chennai", dob: "1993-07-13T00:00:00.000+00:00" },
      { id: 2, name: "thor", address: "asgard", dob: "1985-12-25T00:00:00.000+00:00" },
      { id: 3, name: "jack", address: "new york", dob: "1963-01-15T00:00:00.000+00:00" },
      { id: 4, name: "rose", address: "paris", dob: "1965-11-05T00:00:00.000+00:00" },
      { id: 5, name: "thor", address: "asgard", dob: "1985-12-25T00:00:00.000+00:00" },
      { id: 6, name: "jack", address: "new york", dob: "1963-01-15T00:00:00.000+00:00" },
      { id: 7, name: "rose", address: "paris", dob: "1965-11-05T00:00:00.000+00:00" }
    ];
    this.dataSource.data = this.resultData;
  }

  sortData($event) {
    const sortId = $event.active;
    const sortDirection = $event.direction;
    if ('asc' == sortDirection) {
      this.dataSource.data = this.resultData.slice().sort(
        (a, b) => a[sortId] > b[sortId] ? -1 : a[sortId] < b[sortId] ? 1 : 0
      );
    } else {
      this.dataSource.data = this.resultData.slice().sort(
        (a, b) => a[sortId] < b[sortId] ? -1 : a[sortId] > b[sortId] ? 1 : 0
      );
    }
  }

  selectRow(row, event) {
    console.log(row);
    console.log(event);
    this.studentSelected.next(row);
  }

  ngOnDestroy() {
    this.refreshStudentsData.unsubscribe();
  }
}
