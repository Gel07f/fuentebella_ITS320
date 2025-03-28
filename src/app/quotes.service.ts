import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Quotes = {
  _id: string;
  author: string;
  title: string;
  quotes: string;
  published: string;
}

@Injectable({
  providedIn: 'root'})

export class QuotesService {

  constructor(private http: HttpClient) { }
  Get(): Observable<Quotes[]>{
    return this.http.get<Quotes[]>('http://localhost:3000/api/quotes/get');
  }
}
