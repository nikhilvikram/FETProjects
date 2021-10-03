import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.scss']
})
export class SearchSongComponent implements OnInit {

  searchText:string;
  songsList:Songs[];

  constructor(private _crudHttp:CrudHttpService) { }

  ngOnInit(): void {
    this.listSong();
 }
 listSong(){
   this._crudHttp.list().subscribe((response)=>{
     this.songsList=response;
   },(error=>{

   }));
 }

 playSong(song:Songs){
   
 }
}
