import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  students  = new Array<Student>(
    new Student(1001,"Anil","MVC.NET Core",35000),
    new Student(1002,"Bobby","ASP.NET Core",24000),
    new Student(1003,"Cathe","Angular ",18000)
  );
  getAllStudents():Array<Student>{
    return this.students;
  }
  
  getStudentById(id:number):Student{
    var rows = this.students.filter(x=>x.id==id);
    return rows[0];
  }
}
