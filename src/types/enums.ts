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
}

export const enum Time {
  MinuteSeconds = 60,
  HourSeconds = 3600,
  HourMinutes = 60,
}

export const enum APIRoute {
  Films = 'films',
  SimilarFilms = 'similar',
  PromoFilm = 'promo',
  Login = 'login',
  Logout = 'logout',
  Favorites = 'favorite',
  Comments = 'comments',
}

export const enum ReducerName {
  Films = 'filmsReducer',
  Comments = 'commentsReducer',
  Favorites = 'favoritesReducer',
  User = 'userReducer',
}
