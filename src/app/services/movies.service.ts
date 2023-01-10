import { Injectable} from "@angular/core";
import { Movie } from "../models/movie.model";

@Injectable( {
    providedIn: 'root'
} )

export class MoviesService {
    movies: Movie[] = [
        {
          id: 0,
          title: "De quel film provient cette image ?",
          score: 9,
          nomDuFilm: 'Avatar',
          imageURL: 'https://www.nyfa.edu/student-resources/wp-content/uploads/2014/12/avatar_screenshot_006-1024x576.jpg',
          choixDuJoueur: '',
        },
        {
          id: 1,
          title: "De quel film provient cette image ?",
          score: 0,
          nomDuFilm: 'Once upon a time in hollywood',
          imageURL: 'https://m.media-amazon.com/images/M/MV5BZTAyMTNkYWUtMzhmNy00ODViLThlMzAtMDgzNzFmNzA5MjU4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg',
          choixDuJoueur: '',
        },
        {
          id: 2,
          title: "De quel film provient cette image ?",
          score: 7,
          nomDuFilm: 'Avengers',
          imageURL: 'https://i.ytimg.com/vi/oBqqI6NMeaM/maxresdefault.jpg',
          choixDuJoueur: '',
        },
        {
          id: 3,
          title: "De quel film provient cette image ?",
          score: 5849,
          nomDuFilm: 'Jurassic world',
          imageURL: 'https://www.theglobeandmail.com/resizer/wTEC0l7X6646RCNJoKHRTqw4-1c=/1500x1000/filters:quality(80):format(jpeg)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/FI52GI3WGJCWDNEXNHSUZCUJUE.jpg',
          choixDuJoueur: '',
        },
        {
          id: 4,
          title: "De quel film provient cette image ?",
          score: 467,
          nomDuFilm: 'E.T.',
          imageURL: 'https://fr.web.img4.acsta.net/r_1280_720/newsv7/21/01/06/17/07/4361180.png',
          choixDuJoueur: '',
        },
        {
          id: 5,
          title: "De quel film provient cette image ?",
          score: 3427,
          nomDuFilm: 'Harry Potter',
          imageURL: 'https://images.ladepeche.fr/api/v1/images/view/5f22e7f28fe56f217076ccc5/large/image.jpg?v=1',
          choixDuJoueur: '',
        },
        {
          id:6,
          title: "De quel film provient cette image ?",
          score: 3427,
          nomDuFilm: 'Star wars',
          imageURL: 'https://i.ytimg.com/vi/vDpDhofRoXA/maxresdefault.jpg',
          choixDuJoueur: '',
        },
        {
          id:7,
          title: "De quel film provient cette image ?",
          score: 3427,
          nomDuFilm: 'Wall-E',
          imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F06%2Fmcdwall_ec079-2000.jpg',
          choixDuJoueur: '',
        },
        
      ];

      getAllMovies(): Movie[]{
        return this.movies;
      }

      getMovieById(movieID: number): Movie {
        const movie = this.movies.find(movie => movie.id === movieID);
        if (!movie) {
            throw new Error('Movie not found!');
        } else {
            return movie;
        }
      }

}