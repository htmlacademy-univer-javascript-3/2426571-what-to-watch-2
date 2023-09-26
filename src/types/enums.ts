export enum RoutePath {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Films = 'films',
  Film = ':id',
  AddReview = ':id/review',
  Player = 'player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
