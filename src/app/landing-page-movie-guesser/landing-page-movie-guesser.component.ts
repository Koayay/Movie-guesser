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
    for(let i = 0;i<5;i++)
    {
      randomId = Math.floor(Math.random() * this.moviesService.getAllMovies().length);
      while(this.moviesService.getPlayer().tableauIdFilm.includes(randomId))
      {
        randomId = Math.floor(Math.random() * this.moviesService.getAllMovies().length);
      }
      this.moviesService.getPlayer().tableauIdFilm[i] = randomId;
    }
    console.log(this.moviesService.getPlayer().tableauIdFilm)
    this.router.navigateByUrl(`movieGuessing/${this.moviesService.getPlayer().tableauIdFilm[0]}`);
  }
}
