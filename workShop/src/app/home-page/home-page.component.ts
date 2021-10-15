import { Component, ElementRef, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // @HostBinding('class.navbar') 
  visible1: boolean = true;
  visible: boolean = false; 
  visible2:boolean=false;
  @ViewChild("navbar") firstChild: ElementRef;
// window:any;
oTop:any;
  constructor() {
    // this.window = this.document.defaultView;
    // this.window.scroll(data=>{data}
    // console.log(this.firstChild.nativeElement)
   }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
}

ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (event: any): void => {
  // console.log(event);
  // console.log( window.scrollY);
 
  // this.oTop=this.firstChild.nativeElement.getBoundingClientRect().top-window.innerHeight;
  // console.log(this.oTop);
  if(window.scrollY>986){
    this.visible=true;
    this.visible1=false;
  }else{this.visible=false
    this.visible1=true;}
  //handle your scroll here
  //notice the 'odd' function assignment to a class field
  //this is used to be able to remove the event listener
};


}
