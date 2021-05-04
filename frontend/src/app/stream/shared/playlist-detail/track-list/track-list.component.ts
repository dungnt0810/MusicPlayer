
import { Component, OnInit, Input } from '@angular/core';
import {SongInterface} from '../../interfaces/song.interface';

@Component({
  selector: 'app-playlist-detail-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('track-list') trackList: Array<SongInterface>;

  constructor() {}

  ngOnInit() {}
}
