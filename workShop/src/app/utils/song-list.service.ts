import { Injectable } from '@angular/core';
import { Songs } from '../Songs';

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  
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


  constructor() {
    this.obj.push(this.s1);
    this.obj.push(this.s2);
    this.obj.push(this.s3);
    this.obj.push(this.s4);
    this.obj.push(this.s5);
   }
}
