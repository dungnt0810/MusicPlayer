import { mousedownTrigger } from './action-tile.animation';
import { SongInterface } from 'src/app/stream/shared/interfaces/song.interface';
import { ActionsService } from '../../../services/actions-service/actions.service';
import { ActionInterface } from '../../../interfaces/action.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-tile',
  templateUrl: './action-tile.component.html',
  styleUrls: ['./action-tile.component.scss'],
  animations: [mousedownTrigger],
})
export class ActionTileComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('action') action: ActionInterface;
  // tslint:disable-next-line: no-input-rename
  @Input('music') music: SongInterface;

  isMousedown = false;
  constructor(private actionsService: ActionsService) {}

  ngOnInit() {}

  mouseEvent(event: Event) {
    event.stopPropagation();
    this.isMousedown = event.type === 'mousedown' ? true : false;
    if (event.type === 'mouseup') {
      if (this.action.title === 'Like' || this.action.title === 'Unlike') {
        // this.action = this.actionsService.like(this.action, this.music);
      }
    }
  }
}
