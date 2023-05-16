export interface IFilms {
  page: number;
  results: IFilmsResults[];
}

export interface IFilmsResults {
  genre: string[];
  imageurl: Record<number, string>;
  imdbid: string;
  imdbrating: number | null;
  released: number;
  synopsis: string;
  title: string;
  type: string;
}
