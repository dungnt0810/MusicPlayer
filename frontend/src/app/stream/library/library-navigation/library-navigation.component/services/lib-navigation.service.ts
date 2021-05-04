import { LibraryNavigationInterface } from '../../shared/interfaces/lib-navigation-item.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibNavigationService {
  items: Array<LibraryNavigationInterface>;

  constructor() {
    this.items = [
      {
        title: 'Playlist',
        url: 'library/playlist',
      },
      {
        title: 'Artists',
        url: 'library/artist',
      },
      {
        title: 'Album',
        url: 'library/album',
      },
    ];
  }
}
