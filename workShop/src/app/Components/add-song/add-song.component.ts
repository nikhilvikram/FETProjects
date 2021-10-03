import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';
import { SongListService } from 'src/app/utils/song-list.service';
@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  title:string;
  // audio:Songs;
  audio:FormGroup;
  song:Songs={
    musicId:10,
    musicName:"ww",
    musicFile:"",
    musicImage:"",
    musicArtist:"",
    fav:false,
    rating:0
};
 songsList:Songs[];
 test:any={
  "musicId": 8,
  "musicName": "Summer of 69",
  "musicFile": "../../../../assets/Summer.mp3",
  "musicImage": "../../../assets/Summer.jpg",
  "musicArtist": "Bryan Adams",
  "fav": false,
  "rating": 3
};
  constructor(private _songList:SongListService,private _crudSong:CrudHttpService) {
    // this.songsList=_songList.obj;
  
   }

  ngOnInit(): void {
    
  this.audio = new FormGroup({
    'title':new FormControl(''),
    'artist':new  FormControl(''),
    'audiofile':new FormControl(''),
    'rating': new FormControl()
  })

    this.listSong();
  }
  onSubmit(){
  alert(this.audio.value.title+"song by "+this.audio.value.artist+" has been added to playlist");
  this.song.musicName=this.audio.value.title.toString();
  this.song.musicArtist=this.audio.value.artist;
  this.song.musicFile=this.audio.value.audiofile;
  this.song.musicId=this.songsList.length+2;
  this.song.rating=this.audio.value.rating;
  console.log(this.audio.value.rating);
  this._songList.obj.push(this.song);
  this._crudSong.create(this.song).subscribe((response)=>{

    console.log(response);
    this.listSong();
  });

 
  }
      listSong(){
    this._crudSong.list().subscribe((response)=>{
      this.songsList=response;
    },(error=>{

    }));
  }

}
