import { Injectable} from "@angular/core";
import { Movie, Player, RefScore } from "../models/movie.model";

@Injectable( {
    providedIn: 'root'
} )

export class MoviesService {
    movies: Movie[] = [
        {
          id: 0,
          nomDuFilm: 'avatar',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1062756147448270899/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063499368667295774/image.png',
          grandImageURL: 'https://www.nyfa.edu/student-resources/wp-content/uploads/2014/12/avatar_screenshot_006-1024x576.jpg',
          choixDuJoueur: '',
        },
        {
          id: 1,
          nomDuFilm: 'once upon a time in hollywood',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063490417036898434/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063490419213746238/image.png',
          grandImageURL: 'https://m.media-amazon.com/images/M/MV5BZTAyMTNkYWUtMzhmNy00ODViLThlMzAtMDgzNzFmNzA5MjU4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg',
          choixDuJoueur: '',
        },
        {
          id: 2,
          nomDuFilm: 'avengers',
          imageURL: 'https://i.ytimg.com/vi/oBqqI6NMeaM/maxresdefault.jpg',
          moyenImageURL: '',
          grandImageURL: 'https://i.ytimg.com/vi/oBqqI6NMeaM/maxresdefault.jpg',
          choixDuJoueur: '',
        },
        {
          id: 3,
          nomDuFilm: 'jurassic world',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063492955131883630/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063493016049954846/image.png',
          grandImageURL: 'https://www.theglobeandmail.com/resizer/wTEC0l7X6646RCNJoKHRTqw4-1c=/1500x1000/filters:quality(80):format(jpeg)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/FI52GI3WGJCWDNEXNHSUZCUJUE.jpg',
          choixDuJoueur: '',
        },
        {
          id: 4,
          nomDuFilm: 'e.t.',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063493376135143434/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063493376135143434/image.png',
          grandImageURL: 'https://fr.web.img4.acsta.net/r_1280_720/newsv7/21/01/06/17/07/4361180.png',
          choixDuJoueur: '',
        },
        {
          id: 5,
          nomDuFilm: 'harry potter',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063497712185651200/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063497943174348911/image.png',
          grandImageURL: 'https://images.ladepeche.fr/api/v1/images/view/5f22e7f28fe56f217076ccc5/large/image.jpg?v=1',
          choixDuJoueur: '',
        },
        {
          id:6,
          nomDuFilm: 'star wars',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063494767100571778/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063494837904609452/image.png',
          grandImageURL: 'https://i.ytimg.com/vi/vDpDhofRoXA/maxresdefault.jpg',
          choixDuJoueur: '',
        },
        {
          id:7,
          nomDuFilm: 'wall-e',
          imageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063496215846731807/image.png',
          moyenImageURL: 'https://cdn.discordapp.com/attachments/677916455685193729/1063496810456432820/image.png',
          grandImageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F06%2Fmcdwall_ec079-2000.jpg',
          choixDuJoueur: '',
        },
        
      ];
    player: Player = {
      score : 0,
      reussite : 0,
      nbFilmCherche : 0,
      tableauIdFilm : [0]
    }

    refScore: RefScore[] =
      [
        {
          imageState : 1,
          coeff : 1000
        },
        {
          imageState: 2,
          coeff : 100
        },
        {
          imageState: 3,
          coeff : 10
        }
      ]

    

      getAllMovies(): Movie[]{
        return this.movies;
      }

      getPlayer(): Player{
        return this.player;
      }

      getMovieById(movieID: number): Movie {
        const movie = this.movies.find(movie => movie.id === movieID);
        if (!movie) {
            throw new Error('Movie not found!');
        } else {
            return movie;
        }
      }

      getCoeff(): RefScore[]{
        return this.refScore;
      }

}