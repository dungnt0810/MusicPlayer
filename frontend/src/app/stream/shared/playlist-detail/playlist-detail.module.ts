import { ImageModule } from '../modules/image/image.module';
import { ActionsService } from '../services/actions-service/actions.service';
import { ActionsModule } from '../modules/actions/actions.module';
import { OverlayService } from '../services/overlay-service/overlay.service';
// import { PlaylistDetailService } from './playlist-detail.component/services/playlist-detail.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistDetailRoutingModule } from './playlist-detail-routing.module';
import { PlaylistDetailComponent } from './playlist-detail.component/playlist-detail.component';
import { TrackListComponent } from './track-list/track-list.component';
import { BannerComponent } from './banner/banner.component';
import { MusicTileComponent } from './music-tile/music-tile.component';
import {PlaylistService} from '../services/data-service/playlist.service';
import {HorizontalListModule} from '../modules/horizontal-list/horizontal-list.module';

@NgModule({
  declarations: [
    PlaylistDetailComponent,
    TrackListComponent,
    BannerComponent,
    MusicTileComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ActionsModule,
    PlaylistDetailRoutingModule,
    HorizontalListModule,
  ],
  providers: [PlaylistService, ActionsService],
})
export class PlaylistDetailModule {}
