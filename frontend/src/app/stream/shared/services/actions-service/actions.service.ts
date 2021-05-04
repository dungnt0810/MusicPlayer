import { SongInterface } from 'src/app/stream/shared/interfaces/song.interface';
import { ActionInterface } from '../../interfaces/action.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  commonMusicActions: Array<ActionInterface>;
  myPlaylistMusicActions: Array<ActionInterface>;
  otherMusicActions: Array<ActionInterface>;
  libraryMusicActions: Array<ActionInterface>;
  musicType: object;

  constructor() {
    this.commonMusicActions = [
      {
        title: 'Add to Queue',
        url: '',
        icon: 'queue_music',
      },
      {
        title: 'Add to Playlist',
        url: '',
        icon: 'playlist_add',
      },
      {
        title: 'View Album',
        url: '',
        icon: 'album',
      },
      {
        title: 'View Artist',
        url: '',
        icon: 'account_circle',
      },
      {
        title: 'Report Explicit Content',
        url: '',
        icon: 'explicit',
      },
      {
        title: 'Share',
        url: '',
        icon: 'share',
      },
    ];
    this.myPlaylistMusicActions = [
      {
        title: 'Remove from Playlist',
        url: '',
        icon: 'remove_circle_outline',
      },
      {
        title: 'Add to other Playlist',
        url: '',
        icon: 'playlist_add',
      },
    ];
  }

  getActions(music: SongInterface) {
    const array = [];
    // array.push(this.getLikeAction(music));
    this.commonMusicActions.map((item) => array.push(item));
    return array;
  }

  // getLikeAction(music: SongInterface) {
  //   const action: ActionInterface = {
  //     title: 'Like',
  //     url: '',
  //     icon: 'favorite_border',
  //   };
  //   if (music.liked) {
  //     action.title = 'Unlike';
  //     action.icon = 'favorite';
  //   }
  //   return action;
  // }
  //
  // performAction() {}
  //
  // like(action: ActionInterface, music: SongInterface) {
  //   this.performAction();
  //   music.liked = !music.liked;
  //   return this.getLikeAction(music);
  // }
}
