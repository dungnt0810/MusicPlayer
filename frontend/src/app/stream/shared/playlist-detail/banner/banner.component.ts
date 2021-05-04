import { mousedownTrigger } from './banner.animation';
import { Component, OnInit, Input } from '@angular/core';
import {PlaylistInterface} from '../../interfaces/playlist.interface';

@Component({
  selector: 'app-playlist-detail-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [mousedownTrigger],
})
export class BannerComponent implements OnInit {
  @Input() details: PlaylistInterface;
  isMousedown = false;

  constructor() {}

  mouseEvent(event: Event) {
    event.stopPropagation();
    this.isMousedown = event.type === 'mousedown' ? true : false;
  }

  ngOnInit() {}
}
