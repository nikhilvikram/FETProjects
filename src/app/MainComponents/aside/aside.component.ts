import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  latestSongs=[{sr:1,name:"KiKi",artist:"Drake"},{sr:2,name:"Reest Al",artist:"Malone"}
  ,{sr:3,name:"Gasolina",artist:"Yankee"},{sr:4,name:"Own It",artist:"Wiz"},{sr:1,name:"KiKi",artist:"Drake"},{sr:2,name:"Reest Al",artist:"Malone"}
  ,{sr:3,name:"Gasolina",artist:"Yankee"},{sr:4,name:"Own It",artist:"Wiz"},{sr:1,name:"KiKi",artist:"Drake"},{sr:2,name:"Reest Al",artist:"Malone"}
  ,{sr:3,name:"Gasolina",artist:"Yankee"},{sr:4,name:"Own It",artist:"Wiz"},{sr:1,name:"KiKi",artist:"Drake"},{sr:2,name:"Reest Al",artist:"Malone"}
  ,{sr:3,name:"Gasolina",artist:"Yankee"},{sr:4,name:"Own It",artist:"Wiz"}]

  constructor() { }

  ngOnInit(): void {
  }

}
