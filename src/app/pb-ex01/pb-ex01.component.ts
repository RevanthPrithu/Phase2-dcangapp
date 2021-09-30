import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb-ex01',
  templateUrl: './pb-ex01.component.html',
  styleUrls: ['./pb-ex01.component.css']
})
export class PbEx01Component implements OnInit {
  isDisable:boolean=true;
  constructor() { 
    var hour =new Date().getHours();
    if(hour>=15 && hour<=17)
      this.isDisable=false;
  }

  ngOnInit(): void {
  }







}
