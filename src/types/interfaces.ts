import { AuthorizationStatus } from './enums';

export interface IFilm {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface IFilmShort {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export interface IFilmPromo {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IReview {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export interface IReviewData {
  filmId: string;
  comment: string;
  rating: number;
}

export interface IUser {
  id: string;
  token: string;
  email: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IUserReducer {
  authorizationStatus: AuthorizationStatus;
  authorizationErrors: IResponseError[];
}

export interface IFilmsReducer {
  activeGenre: IGenre;
  currentFilms: IFilmShort[];
  films: IFilmShort[];
  genres: IGenre[];
  promoFilm: IFilmPromo | null;
  filmsLoadingStatus: boolean;
  filmLoadingStatus: boolean;
  similarFilmsLoadingStatus: boolean;
  film: IFilm | null;
  similarFilms: IFilmShort[];
}

export interface ICommentsReducer {
  comments: IReview[];
  commentUploadingStatus: boolean;
  commentAddErrors: IResponseError[];
}

export interface IFavoritesReducer {
  favorites: IFilmShort[];
  favoritesLoadingStatus: boolean;
}

export interface IResponseError {
  property: string;
  messages: string[];
}

export interface IErrorDetail {
  messages: string[];
  property: string;
  value: string;
}
