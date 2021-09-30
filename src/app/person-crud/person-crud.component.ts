import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.css']
})
export class PersonCrudComponent implements OnInit {


  ngOnInit(): void {
  }
  people?:any[];
  x:any={};
  temp:any={};
  msg?:string;
  constructor() {
    this.people=[
      {"id":1001,"pname":"Anil","Gender":"Male","age":25},
      {"id":1002,"pname":"abcd","Gender":"Female","age":35},
      {"id":1003,"pname":"defg","Gender":"Male","age":26},
      {"id":1004,"pname":"xyz","Gender":"Femle","age":23}      
    ];
    this.msg=`Count is ${this.people.length}`;
   }
   getPersonbyId(p:number){
     this.x = JSON.parse(JSON.stringify(this.people?.find(x=>x.id==p)));
   }
   deletePersonbyId(p:number){
     if(confirm("Are you sure")){
       var i = Number(this.people?.findIndex(x=>x.id==p));
       this.people?.splice(i,1);
       this.msg=`Count is ${this.people?.length}`;
     }
   }
   addRecord(temp:any){
     this.people?.push(temp);
     this.msg=`Count is ${this.people?.length}`;
   }
}
