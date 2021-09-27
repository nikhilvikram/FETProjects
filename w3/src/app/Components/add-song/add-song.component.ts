import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  audio = new FormGroup({
    title:new FormControl(''),
    artist:new  FormControl(''),
    audiofile:new FormControl(''),
    rating: new FormControl(0)
  })

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(){
  alert(this.audio.value.title+"song by "+this.audio.value.artist+" has been added to playlist");
  }

}
