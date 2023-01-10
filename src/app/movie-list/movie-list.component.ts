import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  movies!: Movie[];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void{
    this.movies = this.moviesService.getAllMovies();
  }
}
