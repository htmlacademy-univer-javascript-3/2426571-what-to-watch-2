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
