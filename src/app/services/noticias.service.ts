import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseTopHeadlines } from '../intefaces/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.get<T>( query, { headers })
  }

  getTopHeadlines(){
    //return this.http.get<ResponseTopHeadlines>( apiUrl + `/top-headlines?country=ar&category=business&apiKey=` + apiKey);
    return this.ejecutarQuery<ResponseTopHeadlines>('/top-headlines?country=ar&category=business');
  }

  getTopHeadlinesCategory(categoria: string){
    //return this.http.get<ResponseTopHeadlines>(apiUrl + `/top-headlines?country=ar&category=` + categoria + `&apiKey=` + apiKey);
    return this.ejecutarQuery<ResponseTopHeadlines>(`/top-headlines?country=ar&category=${categoria}`)

  }
}
