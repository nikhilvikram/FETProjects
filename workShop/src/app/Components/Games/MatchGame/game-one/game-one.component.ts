import { Component, OnInit } from '@angular/core';
import { ANIMALS } from 'src/app/utils/MatchingGame/Animal';
@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})
export class GameOneComponent implements OnInit {

  animals = ANIMALS;
  leftpartSelectedId:number = -1;
  rightpartSelectedId:number = -1;

  constructor() { }

  ngOnInit() { }
  
  onLeftpartSelected(id:number):void{
	  this.leftpartSelectedId = id;
  }
  
  onRightpartSelected(id:number):void{
	  this.rightpartSelectedId = id;
  }
  
  onLeftpartUnselected():void{
	  this.leftpartSelectedId = -1;
  }
  
  onRightpartUnselected():void{
	  this.rightpartSelectedId = -1;
  }
  

}

