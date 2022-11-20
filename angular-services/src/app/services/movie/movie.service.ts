import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export type ApiResponse = {
  response: string;
  search: Movie[];
  totalPage: number;
  totalResults: number;
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL: string = 'http://www.omdbapi.com/?apikey=a64ccf9e';

  constructor(private httpClient: HttpClient) {}

  // method
  searchMovie(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
  }
}
