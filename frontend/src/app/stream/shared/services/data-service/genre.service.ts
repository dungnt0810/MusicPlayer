
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions} from 'http';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private baseUrl = 'http://localhost:9596/api/genres/';
  headers: HttpHeaders;
  options: RequestOptions;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // @ts-ignore
    this.options = new RequestOptions({ headers: this.headers });
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getGenreById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getGenreByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
}
