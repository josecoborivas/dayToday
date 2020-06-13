import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTopHeadlines } from '../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=c3bd25513f41486b92f8f3e5718b8890`);
  }
}
