import { Subscription } from 'rxjs';
import { OverlayService } from '../../../shared/services/overlay-service/overlay.service';
import { CardType } from 'src/app/stream/shared/enums/card.enum';
import {LibraryPlaylistInterface, PlaylistInterface} from '../../../shared/interfaces/playlist.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {PlaylistService} from '../../../shared/services/data-service/playlist.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'library-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit, OnDestroy {
  showCreateDialog = false;
  items: Array<PlaylistInterface>;
  cardType: CardType;
  subs = new Subscription();
  constructor(
    private playlistService: PlaylistService,
    private overlyService: OverlayService
  ) {}

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(
      (data) => {
        this.items = data;
      },
      (err) => {}
    );
    this.cardType = this.playlistService.getCardType();
    this.subs.add(
      this.playlistService.showDialog$.subscribe((status) => {
        this.showCreateDialog = status;
      })
    );
    this.subs.add(
      this.overlyService.overlayStatus$.subscribe((status) => {
        if (status === false) {
          this.showCreateDialog = status;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.playlistService.updateDialogStatus(true);
  }
}
