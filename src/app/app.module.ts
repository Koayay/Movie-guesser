import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieGuesserComponent } from './movie-guesser/movie-guesser.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageMovieGuesserComponent } from './landing-page-movie-guesser/landing-page-movie-guesser.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import {MatInputModule} from '@angular/material/input';
import { OnGameMenuComponent } from './on-game-menu/on-game-menu.component';
import { FormsModule } from'@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    MovieGuesserComponent,
    MovieListComponent,
    HeaderComponent,
    LandingPageMovieGuesserComponent,
    SingleMovieComponent,
    OnGameMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
