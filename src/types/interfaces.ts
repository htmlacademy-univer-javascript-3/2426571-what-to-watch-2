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
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface IFilmPreview {
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
  authorizationErrors: IAuthorizationError[];
}

export interface IFilmsReducer {
  activeGenre: IGenre;
  currentFilms: IFilmPreview[];
  films: IFilmPreview[];
  genres: IGenre[];
  promoFilm: IFilmPromo | null;
  filmsLoadingStatus: boolean;
  film: IFilm | null;
  similarFilms: IFilmPreview[];
}

export interface ICommentsReducer {
  comments: IReview[];
}

export interface IFavoritesReducer {
  favorites: IFilmPreview[];
}

export interface IAuthorizationError {
  property: string;
  messages: string[];
}

export interface IErrorDetail {
  messages: string[];
  property: string;
  value: string;
}
