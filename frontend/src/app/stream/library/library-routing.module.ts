import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { PlaylistComponent } from './playlist/playlist.component/playlist.component';
import { LibraryComponent } from './library.component/library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      {
        path: 'playlist',
        component: PlaylistComponent,
        data: {
          index: 1,
          animation: {
            value: 'playlist',
            params: { indexDiff: 100, rindexDiff: -100 },
          },
        },
      },
      {
        path: 'artist',
        component: ArtistComponent,
        data: {
          index: 2,
          animation: {
            value: 'artist',
            params: { indexDiff: 100, rindexDiff: -100 },
          },
        },
      },
      {
        path: 'album',
        component: AlbumComponent,
        data: {
          index: 3,
          animation: {
            value: 'album',
            params: { indexDiff: 100, rindexDiff: -100 },
          },
        },
      },
      {
        path: '',
        redirectTo: 'playlist',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
