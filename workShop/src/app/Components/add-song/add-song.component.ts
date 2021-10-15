import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Songs } from 'src/app/Songs';
import { SongListService } from 'src/app/utils/song-list.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  title:string;
  audio = new FormGroup({
    title:new FormControl(''),
    artist:new  FormControl(''),
    audiofile:new FormControl(''),
    rating: new FormControl(0)
  })
  song:Songs;
 songsList:Songs[];
 _songList:SongListService;
  constructor(_songList:SongListService) {
    this.songsList=_songList.obj;
  
   }

  ngOnInit(): void {

  }
  onSubmit(){
  alert(this.audio.value.title+"song by "+this.audio.value.artist+" has been added to playlist");
  // this.song.musicName=this.audio.value.title.toString();
  // this.song.musicArtist=this.audio.value.artist;
  // this.song.musicFile=this.audio.value.audiofile;
  // this.song.rating=this.audio.value.audio.rating;
  // this._songList.obj.push(this.song);
  // this._songList.obj.forEach(ele=>console.log(ele.musicName));
  console.log(this.songsList.push(this.song))
  this._songList.obj.push(this.song);
  console.log(this._songList.obj.toString);
  }
  

}
