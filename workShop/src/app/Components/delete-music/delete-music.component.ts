import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';

@Component({
  selector: 'app-delete-music',
  templateUrl: './delete-music.component.html',
  styleUrls: ['./delete-music.component.scss']
})
export class DeleteMusicComponent implements OnInit {

  songsList:Songs[];
  constructor(private _crudHttp:CrudHttpService) { }

  ngOnInit(): void {
    this.listSong();
  }
  deleteSong(song:Songs){
    this._crudHttp.delete(song.musicId).subscribe((response)=>{
      this.listSong();
    },error=>{

    });

  }
  listSong(){
    this._crudHttp.list().subscribe((response)=>{
      this.songsList=response;
    },(error=>{

    }));
  }

}
