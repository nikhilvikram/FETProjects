import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/Songs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {


  song: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanOnImage.png",
    musicArtist: "Major Lazer"
  };

  s1: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanOnImage.png",
    musicArtist: "Major Lazer"
  }
  s2: Songs = {
    musicId: 2,
    musicName: "Summer of 69",
    musicFile: "../../../../assets/Summer.mp3",
    musicImage: "../../../assets/Summer.jpg",
    musicArtist: "Bryan Adams"
  }

  obj: Songs[] = [];

  playindex = 0;
  playPause: string = "play_circle_filled";
  value: number = 0;
  audio = new Audio();
  constructor() {
    this.obj.push(this.s1);
    this.obj.push(this.s2);
    localStorage.setItem("playlist", JSON.stringify(this.obj));
    setInterval(() => {
      this.value = (this.audio.currentTime / this.audio.duration) * 100;
    }, 1000);
    this.audio.src=this.song.musicFile;
  }
  ngOnInit(): void {
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
    // this.song.musicImage = this.obj[this.playindex].musicImage;
    // this.song.musicName = this.obj[this.playindex].musicName;
    this.song=this.obj[this.playindex];
    this.audio.load();
    this.audio.play();
  }
  prevSong() {
    this.playPause = "pause_circle_filled";
    this.playindex = Math.abs((this.playindex - 1) % this.obj.length);
    this.audio.src = this.obj[this.playindex].musicFile;
    this.song=this.obj[this.playindex];
    this.audio.load();
    this.audio.play();
  }
  

}