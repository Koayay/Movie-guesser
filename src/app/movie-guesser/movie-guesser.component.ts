import { Component, Input, OnInit} from '@angular/core';
import { interval, Observable, tap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-guesser',
  templateUrl: './movie-guesser.component.html',
  styleUrls: ['./movie-guesser.component.scss']
})
export class MovieGuesserComponent implements OnInit{

  @Input() movie!: Movie;
  chrono$!: Observable<number>;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

}


