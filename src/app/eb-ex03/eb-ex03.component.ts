import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-ex03',
  templateUrl: './eb-ex03.component.html',
  styleUrls: ['./eb-ex03.component.css']
})
export class EbEx03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
a?:number;
b?:number;
msg:string='';
calculate(p:string){
  var c=0;
  switch(p){
    case "add":
      c=Number(this.a)+Number(this.b);
      this.msg=`add of ${this.a} and  ${this.b} is ${c} `;
      break;
    case "sub":
      c=Number(this.a)-Number(this.b);
      this.msg=`sub of ${this.a} and  ${this.b} is ${c} `; 
      break;
    case "big":
      c=Number(this.a)>Number(this.b)?Number(this.a):Number(this.b);
      this.msg=`big of ${this.a} and  ${this.b} is ${c} `; 
      break;
    case "small":
      c=Number(this.a)<Number(this.b)?Number(this.a):Number(this.b);
      this.msg=`small of ${this.a} and  ${this.b} is ${c} `; 
      break;

  }
}
}
