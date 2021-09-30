import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd-ex03',
  templateUrl: './sd-ex03.component.html',
  styleUrls: ['./sd-ex03.component.css']
})
export class SdEx03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
items?:string[];
heading?:string;
msg?:string;
getitems(p:string){
  if(p==="fruits"){
     this.heading='list of fruits';
     this.items=['apple','banana','mango','custard'];
     this.msg=`count of fruits:${this.items?.length}`;
  }
  else if(p==="cakes"){
    this.heading='list of cakes';
    this.items=['strawbery','black forest','pineapple','choclate'];
    this.msg=`count of cakes:${this.items?.length}`
  }
}



}
