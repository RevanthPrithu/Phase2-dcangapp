import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb-ex02',
  templateUrl: './pb-ex02.component.html',
  styleUrls: ['./pb-ex02.component.css']
})
export class PbEx02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // path1:string='../assets/elephant.jpg';
  //path2:string='../assets/tiger.jpg';

  //title1:string='Favourite animal ';
 /// 
  //title2:string='revanth ';

  path:string='';
  title:string='';
  getimage(p:string){
    if(p==="elephant"){
      this.path='../assets/elephant.jpg';
      this.title='favorite animal';

    }else if(p==='tiger'){
      this.path='../assets/tiger.jpg';
      this.title=' revanth';
    }
  }

}
