import { Component, Input} from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-guesser',
  templateUrl: './movie-guesser.component.html',
  styleUrls: ['./movie-guesser.component.scss']
})
export class MovieGuesserComponent{

  @Input() movie!: Movie;

  constructor(private moviesService: MoviesService) {
  }
}


