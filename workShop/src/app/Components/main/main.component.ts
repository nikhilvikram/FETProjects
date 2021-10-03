import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';
import { SongListService } from 'src/app/utils/song-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //Object which is used to fetch info and provide it to front End
  song: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanon.jpg",
    musicArtist: "Major Lazer",
    fav: false,
    rating: 4
  };
  //Array of objects of songs
  obj: Songs[] = [];

  playindex = 0;
  playPause: string = "play_circle_filled";
  value: number = 0;
  audio = new Audio();
  favVal: boolean = true;

  searchText = '';
  constructor(_songList: SongListService, private _crudhttp: CrudHttpService) {

    setInterval(() => {
      this.value = (this.audio.currentTime / this.audio.duration) * 100;
    }, 1000);
    this.audio.src = this.song.musicFile;
  }
  
  listSong() {
    this._crudhttp.list().subscribe((response) => {
      this.obj = response;
    }, (error => {

    }));
  }

  playAudio() {
    if (this.audio.paused) {
      this.audio.play();
      this.playPause = "pause_circle_filled";
    } else {
      this.audio.pause();
      this.playPause = "play_circle_filled";
    }
  }

  nextSong() {
    this.playPause = "pause_circle_filled";
    this.playindex = (this.playindex + 1) % this.obj.length;
    console.log(this.playindex);
    this.audio.src = this.obj[this.playindex].musicFile;
    this.song = this.obj[this.playindex];
    this.audio.load();
    this.audio.play();
  }

  prevSong() {
    this.playPause = "pause_circle_filled";
    this.playindex = Math.abs((this.playindex - 1) % this.obj.length);
    this.audio.src = this.obj[this.playindex].musicFile;
    this.song = this.obj[this.playindex];
    this.audio.load();
    this.audio.play();
  }
  shuffle() {

  }
  playFromList(song: Songs) {
    this.song = song;
    this.audio.src = this.song.musicFile;
    this.playAudio();
  }

  makeFav(song: Songs) {
    let index = this.obj.indexOf(song);
    this.obj[index].fav = !this.obj[index].fav;
  }

  ngOnInit(): void {
    this.listSong();
  }

}
