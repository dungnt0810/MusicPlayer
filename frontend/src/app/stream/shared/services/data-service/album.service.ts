
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions} from 'http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = 'http://localhost:9596/api/albums/';
  headers: HttpHeaders;
  options: RequestOptions;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // @ts-ignore
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAlbums(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAlbumById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAlbumByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
}
