import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private URL_API:string = "https://api.themoviedb.org/3";
  private API_KEY:string = "00336e1dd963de6bfdf02f21ed17cb1d";

  constructor(private http: Http) { }

  //retornar lista de tip rating movies
  getTopRatedMovies() {
    // retorna o resultado baseado da URL de requisição
    return this.http.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}&language=pt-BR`)


    //top_rated?api_key=<<api_key>>&language=en-US&page=1
  }
}