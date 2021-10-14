import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
window:any;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    // this.window.scroll(data=>{data}
      
   }
  ngOnInit(): void {
  }
  check() {
    // var sec2=this.document.getElementsByClassName("section-2").getBoundingClientRect().top;
    console.log(this.document);
    console.log(this.window.inn);
  }
}
