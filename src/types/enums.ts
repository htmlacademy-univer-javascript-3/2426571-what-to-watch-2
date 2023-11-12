export const enum RoutePath {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Films = 'films',
  Film = ':id',
  AddReview = 'review',
  Player = 'player',
  NotFound = 'notfound',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum Time {
  MinuteSeconds = 60,
  HourSeconds = 3600,
  HourMinutes = 60,
}

export enum APIRoute {
  Films = '/films',
  Film = 'films/:filmId',
  SimilarFilms = '/films/:filmId/similar',
  PromoFilm = '/promo',
}
