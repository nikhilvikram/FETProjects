import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  obj=[{musicId:1,musicName:"Faded",musicGenre:"Pop",
  musicImage:"../../../assets/music-1.jpg",musicSinger:"Alan Walker"},{musicId:1,musicName:"Faded",musicGenre:"Pop",
  musicImage:"../../../assets/music-1.jpg",musicSinger:"Alan Walker"},{musicId:1,musicName:"Faded",musicGenre:"Pop",
  musicImage:"../../../assets/music-1.jpg",musicSinger:"Alan Walker"},{musicId:1,musicName:"Faded",musicGenre:"Pop",
  musicImage:"../../../assets/music-1.jpg",musicSinger:"Alan Walker"}]
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
