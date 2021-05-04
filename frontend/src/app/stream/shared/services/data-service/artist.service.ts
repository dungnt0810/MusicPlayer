
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardType} from '../../enums/card.enum';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private baseUrl = 'http://localhost:9596/api/artists/';

  constructor(private http: HttpClient) { }

  getCardType(): CardType {
    return CardType.Artist;
  }

  getArtists(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getArtistById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getArtistByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
}
