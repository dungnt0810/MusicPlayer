
import { PlaylistInterface} from '../../interfaces/playlist.interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CardType} from '../../enums/card.enum';
import {AuthService} from '../../../../authentication/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private baseUrl = 'http://localhost:9596/api/playlists';
  private showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private auth: AuthService
              ) {

      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `${auth.retrieveAuthToken()}`
      });
  }

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  getPlaylists(): Observable<PlaylistInterface[]> {
    const options = {
      headers: this.headers
    };
    return this.http.get<PlaylistInterface[]>(`${this.baseUrl}`, options);
  }

  getPlaylistById(id: number): Observable<PlaylistInterface> {
    const options = {
      headers: this.headers
    };
    return this.http.get<PlaylistInterface>(`${this.baseUrl}/${id}`, options);
  }

  getPlaylistByName(name: string): Observable<any> {
    const options = {
      headers: this.headers
    };
    return this.http.get(`${this.baseUrl}/name/${name}`, options);
  }

  createPlaylist(param: object): Observable<object> {
    const options = {
      headers: this.headers
    };
    const body = JSON.stringify(param);
    // @ts-ignore
    return this.http.post(`${this.baseUrl}`, body, options);
  }

  updatePlaylistById(id: number, param: any): Observable<object> {
    const options = {
      headers: this.headers
    };
    const body = JSON.stringify(param);
    // @ts-ignore
    return this.http.patch(`${this.baseUrl}/${id}`, body, options);
  }

  deletePlaylistById(id: number): Observable<object> {
    const options = {
      headers: this.headers
    };
    return this.http.delete(`${this.baseUrl}/${id}`, options);
  }

  addSongToPlaylistById(playlistId: number, songId: number, param: any): Observable<object> {
    const options = {
      headers: this.headers
    };
    const body = JSON.stringify(param);
    // @ts-ignore
    return this.http.patch(`${this.baseUrl}/${playlistId}/song/${songId}`, param, options);
  }

  removeSongToPlaylistById(playlistId: number, songId: number): Observable<object> {
    const options = {
      headers: this.headers
    };
    return this.http.delete(`${this.baseUrl}/${playlistId}/song/${songId}`, options);
  }

  getCardType(): CardType {
    return CardType.Playlist;
  }
}
