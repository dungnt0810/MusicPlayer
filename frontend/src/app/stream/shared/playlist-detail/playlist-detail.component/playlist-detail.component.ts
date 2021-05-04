
import {Component, Input, OnInit} from '@angular/core';
import {PlaylistInterface} from '../../interfaces/playlist.interface';
import {PlaylistService} from '../../services/data-service/playlist.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../../../authentication/shared/services/auth.service';

interface LinkedScrolling {
  element: HTMLElement;
  elementClass: string;
  linked: HTMLElement;
  linkedClass: string;
}

@Component({
  selector: 'app-playlist-detail, app-card',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss'],
})
export class PlaylistDetailComponent implements OnInit {
  playlistRes: PlaylistInterface;
  gradientOpacity = 0.09;
  prevScrollPos = { banner: 0, 'track-list': 0 };
  // tslint:disable-next-line: no-input-rename
  @Input('playlist') item: PlaylistInterface;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    console.log(this.item);
    // console.log(this.item.id);

    this.playlistService.getPlaylistById(this.item.id).subscribe(data => this.playlistRes = data);
  }

  linkedScrolling({
    element,
    elementClass,
    linked,
    linkedClass,
  }: LinkedScrolling) {
    const scrollDist = element.scrollTop - this.prevScrollPos[elementClass];
    linked.scrollTop += scrollDist;
    this.prevScrollPos[elementClass] = element.scrollTop;
    this.prevScrollPos[linkedClass] = linked.scrollTop;
  }
}
