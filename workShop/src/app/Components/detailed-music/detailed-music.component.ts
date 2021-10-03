import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/Songs';
import { CrudHttpService } from 'src/app/utils/crud-http.service';

@Component({
  selector: 'app-detailed-music',
  templateUrl: './detailed-music.component.html',
  styleUrls: ['./detailed-music.component.scss']
})
export class DetailedMusicComponent implements OnInit {

  song1: Songs = {
    musicId: 1,
    musicName: "LeanOn",
    musicFile: "../../../../assets/leanOn.mp3",
    musicImage: "../../../assets/leanon.jpg",
    musicArtist: "Major Lazer",
    fav: false,
    rating: 4
  };
  songsList: Songs[];
  id: number;
  constructor(private _crudHttp: CrudHttpService, private _activateRoute: ActivatedRoute) {
    this.id = _activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.listSong();

  }

  listSong() {
    this._crudHttp.list().subscribe((response) => {
      this.songsList = response;
    }, (error => {

    }));
  }
  findMusic(song: Songs) {
    this.song1 = this.songsList.find((data) => { data.musicId === this.id })!;
  }

}
