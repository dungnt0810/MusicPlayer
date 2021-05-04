import { NavbarItem } from '../../shared/interfaces/navbar-item';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  items: Array<NavbarItem>;
  constructor() {
    this.items = [
      // {
      //   title: 'Music',
      //   icon: 'music_video',
      //   link: '/stream/music',
      // },
      // {
      //   title: 'Explore',
      //   icon: 'explore',
      //   link: '/stream/explore',
      // },
      {
        title: 'Library',
        icon: 'favorite',
        link: '/stream/library',
      },
    ];
  }
}
