import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddSongComponent } from './Components/add-song/add-song.component';
import { AddmusicComponent } from './Components/addmusic/addmusic.component';
import { DeleteMusicComponent } from './Components/delete-music/delete-music.component';
import { DetailedMusicComponent } from './Components/detailed-music/detailed-music.component';
import { DetailedSongComponent } from './Components/detailed-song/detailed-song.component';
import { EditMusicComponent } from './Components/edit-music/edit-music.component';
import { MainComponent } from './Components/main/main.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { RatingComponent } from './Components/rating/rating.component';
import { SearchSongComponent } from './Components/search-song/search-song.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'addMusic',component:AddmusicComponent},
  {path:'addSong',component:AddSongComponent},
  {path:'detailedsong/:id/:name',component:DetailedSongComponent},
  {path:'detailedmusic/:id',component:DetailedMusicComponent},
  {path:'rating',component:RatingComponent},
  {path:'edit',component:EditMusicComponent},
  {path:'delete',component:DeleteMusicComponent},
  {path:'search',component:SearchSongComponent},
  {path:'login',component:UserLoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
