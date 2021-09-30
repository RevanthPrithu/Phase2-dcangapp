import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-ex04',
  templateUrl: './eb-ex04.component.html',
  styleUrls: ['./eb-ex04.component.css']
})
export class EbEx04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
choice?:string;
msg?:string;
getchoice(p:string){
  this.msg=`selected choice:${p}`;

}
t1?:string;
gender?:string;
msg1?:string;
setgender(p:string){
  if(p==="m")
    this.gender="male";
  else if(p==="f"){
    this.gender="female";

  }
}
  display(){
    if(this.gender=="male")
      this.msg1=`heloo Mr.${this.t1}`;
    else if(this.gender=="female")
      this.msg1=`hello Ms. ${this.t1}`
  }



}
