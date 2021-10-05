import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userList:string[]=["Nikhil","Nitin","Pranita","Onkar","Pranita","Pranit","Niraj","Prafull"]
  newRelease:string[]=["Bubble","Bounce","Animal Quizes","MAth Libs","Movie Quize","Celebrity Quize"]
  quize:string[]=["Geography","Physics","Mathematics","IQ","English","History","Biology"]
  constructor() { }

  ngOnInit(): void {
  }

}
