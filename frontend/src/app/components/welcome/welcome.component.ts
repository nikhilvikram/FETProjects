import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  class:string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  userList:string[]=["Nikhil","Nitin","Pranita","Onkar","Pranita","Pranit","Niraj","Prafull"]
  newRelease:string[]=["Bubble","Bounce","Animal Quizes","MAth Libs","Movie Quize","Celebrity Quize","Geography","Physics","Mathematics","IQ","English"]
  quize:string[]=["Geography","Physics","Mathematics","IQ","English","History","Biology"]
  

  constructor() { }
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue' ,class:'One'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen',class:'Two'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink',class:'Three'}
  ];
  ngOnInit(): void {

  }

}
