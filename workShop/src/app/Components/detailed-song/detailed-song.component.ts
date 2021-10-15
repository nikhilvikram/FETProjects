import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/Songs';

@Component({
  selector: 'app-detailed-song',
  templateUrl: './detailed-song.component.html',
  styleUrls: ['./detailed-song.component.scss']
})
export class DetailedSongComponent implements OnInit {
  song: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanon.jpg",
    musicArtist: "Major Lazer",
    fav:false,
    rating:4
  };
  
  s1: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanon.jpg",
    musicArtist: "Major Lazer",
    fav:false,
    rating:4
  }
  s2: Songs = {
    musicId: 2,
    musicName: "Summer of 69",
    musicFile: "../../../../assets/Summer.mp3",
    musicImage: "../../../assets/Summer.jpg",
    musicArtist: "Bryan Adams",
    fav:false,
    rating:4
  }
  s3: Songs = {
    musicId: 3,
    musicName: "Gasolina",
    musicFile: "../../../../assets/Summer.mp3",
    musicImage: "../../../assets/TakinOver.jpg",
    musicArtist: "Bryan Adams",
    fav:false,
    rating:4
  }
  s4: Songs = {
    musicId: 4,
    musicName: "Star Wars",
    musicFile: "../../../../assets/Summer.mp3",
    musicImage: "../../../assets/StarWars.png",
    musicArtist: "Bryan Adams",
    fav:false,
    rating:4
  }
  s5: Songs = {
    musicId: 5,
    musicName: "We own it",
    musicFile: "../../../../assets/Summer.mp3",
    musicImage: "../../../assets/ownit.jpg",
    musicArtist: "Bryan Adams",
    fav:false,
    rating:4
  }
  
  obj: Songs[]  = [];

  playindex = 0;
  playPause: string = "play_circle_filled";
  value: number = 0;
  audio = new Audio();
  favVal:boolean=true;
  sId:any;
  sName:string;

  constructor(private _activateRoute: ActivatedRoute) { 
    
    this.obj.push(this.s1);
    this.obj.push(this.s2);
    this.obj.push(this.s3);
    this.obj.push(this.s4);
    this.obj.push(this.s5);
    localStorage.setItem("playlist", JSON.stringify(this.obj));
    setInterval(() => {
      this.value = (this.audio.currentTime / this.audio.duration) * 100;
    }, 1000);
    this.audio.src=this.song.musicFile;
    this.sId=_activateRoute.snapshot.params.id;
  
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

ngOnInit(): void {
}

}
