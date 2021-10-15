import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Songs } from 'src/app/Songs';

@Component({
  selector: 'app-addmusic',
  templateUrl: './addmusic.component.html',
  styleUrls: ['./addmusic.component.scss']
})
export class AddmusicComponent implements OnInit {
  
// @Input()
// songAdd1:Songs;
// @Output()
// notify: EventEmitter<Songs>=new EventEmitter();
songInput:Songs={
  musicId: 0,
  musicName: "",
  musicFile: "../../../../assets/leanOn.mp3",
  musicImage: "../../../assets/leanon.jpg",
  musicArtist: "",
  fav:false,
  rating:4

}

  constructor() { }
  songAdd:Songs;

  ngOnInit(): void {
  }

  // addSong(){
  // this.notify.emit(this.songAdd);
  // }
  addSong(music:any){
    console.log(this.songInput.musicArtist+"Ngform Object "+music);
    alert("ID: "+this.songInput.musicId+" "+this.songInput.musicName+" by "+this.songInput.musicArtist+" has been added to library");
  }

}
