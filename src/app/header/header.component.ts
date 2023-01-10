import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private moviesService: MoviesService,
              private router: Router) {}

  onPlay(){
    var randomId!: number;
    randomId = Math.floor(Math.random() * this.moviesService.getAllMovies().length);
    this.router.navigateByUrl("movieGuessing");
    this.router.navigateByUrl(`movieGuessing/${randomId}`);
  }
}
