import { OverlayService } from '../../../services/overlay-service/overlay.service';
import { SongInterface } from 'src/app/stream/shared/interfaces/song.interface';
import { ActionInterface } from '../../../interfaces/action.interface';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('actions') actions: Array<ActionInterface>;
  // tslint:disable-next-line: no-input-rename
  @Input('music') music: SongInterface;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.updateOverlay();
  }

  updateOverlay(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.overlayService.updateOverlayStatus(false);
  }
}
