import { CardType } from './../../shared/enums/card.enum';
import { ArtistInterface } from '../../shared/interfaces/artist.interface';

import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../../shared/services/data-service/artist.service';

@Component({
  selector: 'app-library-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  cardType: CardType;
  items: Array<ArtistInterface>;
  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.cardType = this.artistService.getCardType();
    this.artistService.getArtists().subscribe(data => this.items = data);
  }
}
