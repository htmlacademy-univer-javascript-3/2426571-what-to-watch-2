export interface IFilm {
  id: number;
  title: string;
  year: number;
  summary: string;
  shortSummary: string;
  genres: string;
  imdbId: string;
  runtime: number;
  youtubeTrailer: string;
  imdbTrailer: string;
  rating: number;
  poster: string;
  director: string;
  writers: string;
  cast: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IReview {
  id: number;
  filmId: number;
  text: string;
  rating: number;
  date: Date;
  author: string;
}
