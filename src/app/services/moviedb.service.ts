import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const URL_T = `http://localhost:3000/rating`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  getRate(): any {
    return this.http.get<any>(URL_T, httpOptions).pipe(
      catchError(this.handleError<any>(`Falha no getRating`))
    );
}

  private URL_API:string = "https://api.themoviedb.org/3";
  private API_KEY:string = "00336e1dd963de6bfdf02f21ed17cb1d";

  constructor(private http: HttpClient){ }

  //retornar lista de tip rating movies
  //getTopRatedMovies() {
    // retorna o resultado baseado da URL de requisição
    //return this.http.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
    //top_rated?api_key=<<api_key>>&language=en-US&page=1
  //}

  // função (método) terá um retorno do tipo 
  getMovies(param:string): Observable<any> {
    const url = `${this.URL_API}/${param}api_key=${this.API_KEY}&language=pt-BR`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`O parametro requisitado foi: ${param} pela URL: ${url}`)),
      catchError(this.handleError<any>(`Falha no getMovies parametro = ${param}`))
    );
  }

  // método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(error); // log do erro na console
      // mantém o app rodando por ter retornado o obj vazio
    return of(result as T);
    };
  }
}