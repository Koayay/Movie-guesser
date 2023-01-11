import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-on-game-menu',
  templateUrl: './on-game-menu.component.html',
  styleUrls: ['./on-game-menu.component.scss']
})
export class OnGameMenuComponent {
  constructor(private router: Router,
    private moviesService: MoviesService) {}

    onPlay(){
      var randomId!: number;
      randomId = Math.floor(Math.random() * this.moviesService.getAllMovies().length);
      this.router.navigateByUrl(`movieGuessing/${randomId}`);
    }
}
