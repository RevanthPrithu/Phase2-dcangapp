import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {



  ngOnInit(): void {
  }
  students = new Array<Student>();
  constructor(private _ss:StudentService) { 
    this.students = this._ss.students;  
  }
  getStudentsViaService(){
  
  }
}
