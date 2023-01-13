export class Movie{
    id!: number;
    nomDuFilm!: string;
    imageURL!: string;
    moyenImageURL!: string;
    grandImageURL!: string;
    choixDuJoueur!: string;
}

export class Player{
    score!: number;
    reussite!: number;
    nbFilmCherche!: number;
    tableauIdFilm!: number[];
}

export interface RefScore{
    imageState: number;
    coeff: number;
}