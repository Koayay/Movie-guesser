import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, interval, map, Observable, Subject, take, tap} from 'rxjs';
import { Movie, Player, RefScore } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie!: Movie;
  movies!: Movie[];
  player!: Player;
  chrono$!: Observable<number>;
  imageURL!: string;
  imageState!: number;
  score!: number;
  subscription: any;
  refScore!: RefScore[];
  

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.player = this.moviesService.getPlayer();
    const movieId = +this.route.snapshot.params['id'];
    this.refScore = this.moviesService.getCoeff();
    this.movie = this.moviesService.getMovieById(movieId);
    this.imageURL = this.movie.imageURL;
    this.imageState = 1;
    this.chrono$ = interval(1000).pipe(
      take(26),
      map(value => 25 -value),
    );
    this.subscription = this.chrono$.subscribe(value => {this.score = value * (this.refScore.find(rf => rf.imageState === this.imageState)?.coeff ?? 0) ;
    console.log(this.score)});
  }


  extendedImage(): void
  {
      if(this.imageState === 1)
      {
        this.imageURL = this.movie.moyenImageURL;
        this.imageState++;
      }
      else if(this.imageState === 2)
      {
        this.imageURL = this.movie.grandImageURL;
        this.imageState++;
      }
  }

  onSkipping(): void{
    this.subscription.unsubscribe();
    this.movie.choixDuJoueur = "";
    this.player.nbFilmCherche++;
    if(this.player.nbFilmCherche === 5)
      {
        this.router.navigateByUrl("movieGuessing/endingMenu");
      }
      else{
        this.router.navigateByUrl("movieGuessing/menu");
      }
  }

  onSubmitForm(): void {
    if(this.movie.choixDuJoueur === this.movie.nomDuFilm)
    {
      this.player.reussite++;
      this.movie.choixDuJoueur = "";
      this.player.nbFilmCherche++;
      if(this.player.nbFilmCherche === 5)
      {
        this.subscription.unsubscribe();
        this.router.navigateByUrl("movieGuessing/endingMenu");
      }
      else
      {
        this.player.score += this.score;
        this.subscription.unsubscribe();
        this.router.navigateByUrl("movieGuessing/menu");
      }
    }
  }
}
