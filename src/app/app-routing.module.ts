import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EndingMenuComponent } from './ending-menu/ending-menu.component';
import { LandingPageMovieGuesserComponent } from './landing-page-movie-guesser/landing-page-movie-guesser.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { OnGameMenuComponent } from './on-game-menu/on-game-menu.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';


const routes: Routes = [
    {path: 'movieGuessing/endingMenu', component: EndingMenuComponent},
    {path: 'movieGuessing/menu', component: OnGameMenuComponent},
    {path: 'movieGuessing/:id', component: SingleMovieComponent},
    {path: 'movieGuessing', component: MovieListComponent},
    { path: '', component: LandingPageMovieGuesserComponent},
];



@NgModule( {
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
} )

export class AppRoutingModule{

}