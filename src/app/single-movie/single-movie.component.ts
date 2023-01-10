import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie!: Movie;

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    const movieId = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovieById(movieId);
  }
}
