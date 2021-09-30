import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


  ngOnInit(): void {
  }
  id:number=0;
  x=new Student();
    constructor(private _ss:StudentService) { }
    getStudentByIdViaService(id:number){
      this.x = this._ss.getStudentById(id);
    }
}
