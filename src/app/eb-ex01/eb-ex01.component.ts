import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-ex01',
  templateUrl: './eb-ex01.component.html',
  styleUrls: ['./eb-ex01.component.css']
})
export class EbEx01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  gender:string='';
  msg:string='';
getMessage(p:string){
  if(p==='wishes'){
    var hour=new Date().getHours();
    if(hour<12)
      this.msg="hello,Good Morning"
    else if(hour<16)
      this.msg="Hello Good Afternoon"
    else
      this.msg="Good Eve"
  }
  else if(p==='date')
    this.msg=`Date is ${new Date().toLocaleDateString()}`;
  else if (p==='time')
    this.msg=`Time is ${new Date().toLocaleTimeString()}`
  
}
clearMessage(){
  this.msg='';
}
}
