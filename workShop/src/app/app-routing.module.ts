import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddSongComponent } from './Components/add-song/add-song.component';
import { AddmusicComponent } from './Components/addmusic/addmusic.component';
import { DetailedSongComponent } from './Components/detailed-song/detailed-song.component';
import { MainComponent } from './Components/main/main.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RatingComponent } from './Components/rating/rating.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'addMusic',component:AddmusicComponent},
  {path:'addSong',component:AddSongComponent},
  {path:'detailedsong/:id/:name',component:DetailedSongComponent},
  {path:'rating',component:RatingComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
