import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-ex02',
  templateUrl: './eb-ex02.component.html',
  styleUrls: ['./eb-ex02.component.css']
})
export class EbEx02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:string='';
msg:string='';
wishes(){
  this.msg=`hello ${this.name}`;
  
}
}
