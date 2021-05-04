import { ActionInterface } from '../../interfaces/action.interface';
import { ActionsService } from '../../services/actions-service/actions.service';
import { OverlayService } from '../../services/overlay-service/overlay.service';
import { SongInterface } from 'src/app/stream/shared/interfaces/song.interface';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { floatInTrigger, floatOutTrigger } from './music-tile.animation';

@Component({
  selector: 'app-music-tile',
  templateUrl: './music-tile.component.html',
  styleUrls: ['./music-tile.component.scss'],
  animations: [floatInTrigger, floatOutTrigger],
})
export class MusicTileComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('music') music: SongInterface;

  actions: Array<ActionInterface>;
  selected: boolean;
  constructor(
    private actionsService: ActionsService,
    private overlayService: OverlayService
  ) {
    this.selected = false;
  }

  ngOnInit() {
    this.overlayService.overlayStatus$.subscribe((status) => {
      if (status === false && this.selected) {
        this.selected = false;
      }
    });
  }

  ngOnDestroy() {
    this.toggleActions(false);
  }

  toggleActions(toggle: boolean) {
    this.selected = toggle;
    this.overlayService.updateOverlayStatus(toggle);
    this.actions = this.actionsService.getActions(this.music);
  }
}
