import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-landing-page-movie-guesser',
  templateUrl: './landing-page-movie-guesser.component.html',
  styleUrls: ['./landing-page-movie-guesser.component.scss']
})
export class LandingPageMovieGuesserComponent{


  constructor(private router: Router,
              private moviesService: MoviesService) {}

  onPlay(){
    var randomId!: number;
    randomId = Math.floor(Math.random() * this.moviesService.getAllMovies().length);
    this.router.navigateByUrl(`movieGuessing/${randomId}`);
  }
}
