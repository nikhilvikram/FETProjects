import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';
import { SongListService } from 'src/app/utils/song-list.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rating:number=3;
  songsList:Songs[];

  constructor(_songList:SongListService) {
    this.songsList=_songList.obj
    console.log("Inside Routing");
   }

   ngOnInit(): void {
  }
  
  rateArray(n : number): Array<number>{
    return Array(n);
  }

}
