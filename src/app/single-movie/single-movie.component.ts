import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, interval, map, Observable, take, tap } from 'rxjs';
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
  imageURL!: string;
  imageState!: number;

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit(): void {
    const movieId = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovieById(movieId);
    this.imageURL = this.movie.imageURL;
    this.imageState = 1;
    this.chrono$ = interval(1000).pipe(
      take(26),
      map(value => 25 -value),
    );
  }

  ngOnDestroy(): void {
    
  }


  extendedImage(): void
  {
      if(this.imageState === 1)
      {
        this.imageURL = this.movie.moyenImageURL;
        this.imageState++;
        this.chrono$ = interval(1000).pipe(
          take(26),
          map(value => 25 -value),
        );
      }
      else if(this.imageState === 2)
      {
        this.imageURL = this.movie.grandImageURL;
        this.imageState++;
        this.chrono$ = interval(1000).pipe(
          take(26),
          map(value => 25 -value),
        );
      }
  }

  onSubmitForm(): void {
    if(this.movie.choixDuJoueur === this.movie.nomDuFilm)
    {
      this.router.navigateByUrl("movieGuessing/menu");
      this.movie.choixDuJoueur = "";
    }
  }
}
