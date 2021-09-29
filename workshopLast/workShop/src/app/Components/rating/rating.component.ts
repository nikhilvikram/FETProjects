import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';
import { SongListService } from 'src/app/utils/song-list.service';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rating:number=3;
  songsList:Songs[];
  constructor(private _songList:SongListService,private _crudHttp:CrudHttpService) {
    console.log("Inside Routing");
   }

   ngOnInit(): void {
     this.listSong();
  }
  listSong(){
    this._crudHttp.list().subscribe((response)=>{
      this.songsList=response;
    },(error=>{

    }));
  }
  rateArray(n : number): Array<number>{
    return Array(n);
  }

}
