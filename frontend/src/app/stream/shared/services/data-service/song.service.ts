import { SongInterface } from '../../interfaces/song.interface';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private baseUrl = 'http://localhost:9596/api/songs/';

  song: SongInterface;

  constructor(private http: HttpClient) { }

  getSongs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getSongById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getSongByName(name: string): Observable<object> {
    return this.http.get('${this.baseUrl}/' + 'name' + '/${name}');
  }
}
