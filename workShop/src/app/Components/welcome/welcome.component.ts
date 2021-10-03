import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit ,OnChanges{
  userIndex:number;
  check:string |null;

  constructor() {
   this.check= localStorage.getItem("userIndex");
   
   if(this.check !==null){this.userIndex=+this.check;}
   else{this.userIndex=-1}
   console.log(this.userIndex+"type"+typeof(this.userIndex))

   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
