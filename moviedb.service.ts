import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private URL_API:string = "https://api.themoviedb.org/3";
  private API_KEY:string = "00336e1dd963de6bfdf02f21ed17cb1d";

  constructor(private http: HttpClient) { }

  //retornar lista de tip rating movies
  // getTopRatedMovies() {
    // retorna o resultado baseado da URL de requisição
    //return this.http.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
    //top_rated?api_key=<<api_key>>&language=en-US&page=1
  //}

  // função (método) terá um retorno do tipo Observable
  getMovies(param:string):Observable<any> {
    const url = `${this.URL_API}/movie/${param}?api_key=${this.API_KEY}&language=pt-BR`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`O parametro requisitado foi: ${param} pela URL: ${url}`)),
      catchError(this.handleError<any>())
    );
}

  // método privado para exibir o erro
  private handleError<T>(result?: T) {
    return (error: any):Observable<T> => {
      console.error(error); // log do erro na console

      // mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}