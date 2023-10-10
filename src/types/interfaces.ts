export interface IFilm {
  id: number;
  title: string;
  year: number;
  summary: string;
  short_summary: string;
  genres: string;
  imdb_id: string;
  runtime: number;
  youtube_trailer: string;
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
