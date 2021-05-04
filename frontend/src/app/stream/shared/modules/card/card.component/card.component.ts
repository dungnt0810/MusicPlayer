import { ArtistInterface } from '../../../interfaces/artist.interface';
import { PlaylistInterface } from '../../../interfaces/playlist.interface';
import { Component, OnInit, Input } from '@angular/core';
import { CardType } from 'src/app/stream/shared/enums/card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('playlist') playlist: PlaylistInterface;
  // tslint:disable-next-line: no-input-rename
  @Input('artist') artist: ArtistInterface;
  // tslint:disable-next-line: no-input-rename
  @Input('cardType') inputCardType: CardType;
  public cardType = CardType;
  constructor() {}

  ngOnInit() {}
}
