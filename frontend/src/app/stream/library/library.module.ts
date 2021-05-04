import { PlaylistModule } from './playlist/playlist.module';
import { HorizontalListModule } from '../shared/modules/horizontal-list/horizontal-list.module';
import { LibraryNavigationModule } from './library-navigation/library-navigation.module';
import { LibraryComponent } from './library.component/library.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [LibraryComponent, ArtistComponent, AlbumComponent],
  imports: [
    CommonModule,
    LibraryNavigationModule,
    PlaylistModule,
    HorizontalListModule,
    LibraryRoutingModule,
  ],
})
export class LibraryModule {}
