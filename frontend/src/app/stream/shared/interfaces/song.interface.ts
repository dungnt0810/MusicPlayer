import { ArtistInterface } from './artist.interface';
import {AlbumInterface} from './album.interface';

export interface SongInterface {
  title: string;
  // artists: Array<ArtistInterface>;
  artist: ArtistInterface;
  album: AlbumInterface;
  cover: string;
  length: string;
  // liked?: boolean;
}
