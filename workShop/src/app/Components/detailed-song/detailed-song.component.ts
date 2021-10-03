import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';

@Component({
  selector: 'app-detailed-song',
  templateUrl: './detailed-song.component.html',
  styleUrls: ['./detailed-song.component.scss']
})
export class DetailedSongComponent implements OnInit {
  song1: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanon.jpg",
    musicArtist: "Major Lazer",
    fav: false,
    rating: 4
  };
  songList: Songs[] ;

  playindex = 0;
  playPause: string = "play_circle_filled";
  value: number = 0;
  audio = new Audio();
  sId: number;

  constructor(private _activateRoute: ActivatedRoute, private _crudHttp: CrudHttpService) {
    this.sId = this._activateRoute.snapshot.params.id;
    console.log("InConstructor")
  }
  listSong() {
    this._crudHttp.list().subscribe((response) => {
      this.songList = response;
    }, (error => {

    }));
    console.log("--"+this.songList)
  }

  playAudio() {

    if (this.audio.paused) {
      this.callMe();
      this.audio.play();
      this.playPause = "pause_circle_filled";
    } else {
      this.audio.pause();
      this.playPause = "play_circle_filled";
    }

  }
  nextSong() {
    this.playPause = "pause_circle_filled";
    this.playindex = (this.playindex + 1) % this.songList.length;
    console.log(this.playindex);
    this.audio.src = this.songList[this.playindex].musicFile;
    this.song1 = this.songList[this.playindex];
    this.audio.load();
    this.audio.play();
  }
  prevSong() {
    this.playPause = "pause_circle_filled";
    this.playindex = Math.abs((this.playindex - 1) % this.songList.length);
    this.audio.src = this.songList[this.playindex].musicFile;
    this.song1 = this.songList[this.playindex];
    this.audio.load();
    this.audio.play();
  }


  callMe(){
    this.playindex= this.songList.findIndex(data=>data.musicId==this.sId);
    // this.playindex=5;
    // console.log(this.playindex+"Is a Me")
    this.audio.src = this.songList[this.playindex].musicFile;
    this.song1 = this.songList[this.playindex];
    this.audio.load();
    this.audio.play();
  }

    ngOnInit(): void {
    this.listSong();
    console.log("InInit");
 
    setInterval(() => {
      this.value = (this.audio.currentTime / this.audio.duration) * 100;
    }, 1000);
    
    //
  }

}
