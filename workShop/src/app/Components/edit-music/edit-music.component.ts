import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';
@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})

export class EditMusicComponent implements OnInit {
  song:Songs={
    musicId:10,
    musicName:"ww",
    musicFile:"",
    musicImage:"",
    musicArtist:"",
    rating:0,
    fav:false
  };
rat:number;
img:string="../../../../assets/musicBack.png";

 songsList:Songs[];
 audio:FormGroup;
  constructor(private _crudHttp:CrudHttpService) {
   }

  ngOnInit(): void {
    this.audio = new FormGroup({
      'id':new FormControl(),
      'title':new FormControl(''),
      'artist':new  FormControl(''),
      'audiofile':new FormControl(''),
      'ratingA': new FormControl()
    })
this.listSong();
  }
  listSong(){
    this._crudHttp.list().subscribe((response)=>{
      this.songsList=response;
    },(error=>{

    }));
  }
  setSong(song:Songs){
    this.song=song;
    this.rat=this.song.rating;
    this.img=this.song.musicImage;
  }

  editSong(){
    alert("submitted");
    // this.song.musicId=this.audio.value.id;
    this.song.musicName=this.audio.value.title;
    this.song.musicArtist=this.audio.value.artist;
    this.song.musicFile=this.audio.value.audiofile;
    this.song.rating=this.audio.value.ratingA;
    console.log(this.song);

    this._crudHttp.update(this.song.musicId,this.song).subscribe((response)=>{
      this.listSong();
    },(error=>{

    }));
    
  }

}
