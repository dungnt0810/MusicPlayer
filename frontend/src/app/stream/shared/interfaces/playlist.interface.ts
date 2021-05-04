import { ArtistInterface } from './artist.interface';
import {SongInterface} from './song.interface';

export interface PlaylistInterface {
  id: number;
  name: string;
  songs: Array<SongInterface>;
  // cover: string;
  owner: number;
}

export interface LibraryPlaylistInterface {
  id: string;
  url: string;
  name: string;
  // cover: string;
}
