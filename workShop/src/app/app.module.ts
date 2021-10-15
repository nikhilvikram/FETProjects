import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AsideComponent } from './Components/aside/aside.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchPipePipe } from './utils/search-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { AddmusicComponent } from './Components/addmusic/addmusic.component';
import { PlayerComponent } from './Components/player/player.component';
import { AddSongComponent } from './Components/add-song/add-song.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { DetailedSongComponent } from './Components/detailed-song/detailed-song.component';
import { RatingComponent } from './Components/rating/rating.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { EditMusicComponent } from './Components/edit-music/edit-music.component';
import { DeleteMusicComponent } from './Components/delete-music/delete-music.component';
import { SquareComponent } from './Components/square/square.component';
import { BoardComponent } from './Components/board/board.component';
import { TetrisBoardComponent } from './Components/tetris-board/tetris-board.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxPopper } from 'angular-popper';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    SearchPipePipe,
    AboutComponent,
    AddmusicComponent,
    PlayerComponent,
    AddSongComponent,
    PagenotfoundComponent,
    DetailedSongComponent,
    RatingComponent,
    WelcomeComponent,
    EditMusicComponent,
    DeleteMusicComponent,
    SquareComponent,
    BoardComponent,
    TetrisBoardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
