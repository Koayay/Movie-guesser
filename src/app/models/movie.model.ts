export class Movie{
    id!: number;
    title!: string;
    score!: number;
    nomDuFilm!: string;
    imageURL!: string;
    moyenImageURL!: string;
    grandImageURL!: string;
    choixDuJoueur!: string;
}

export class Player{
    score!: number;
    reussite!: number;
}

export interface RefScore{
    imageState: number;
    coeff: number;
}