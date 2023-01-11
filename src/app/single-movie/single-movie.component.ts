import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, map, Observable, take, tap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit, OnDestroy {

  movie!: Movie;
  movies!: Movie[];
  chrono$!: Observable<number>;
  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit(): void {
    const movieId = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovieById(movieId);
    this.chrono$ = interval(1000).pipe(
      take(26),
      map(value => 25 -value)
    );
  }

  ngOnDestroy(): void {
    
  }

  onSubmitForm(): void {
    if(this.movie.choixDuJoueur === this.movie.nomDuFilm)
    {
      this.router.navigateByUrl("movieGuessing/menu");
    }
  }
}
