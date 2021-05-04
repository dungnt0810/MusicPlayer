import { Component, OnInit, Input } from '@angular/core';
import { CardType } from 'src/app/stream/shared/enums/card.enum';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('header') header?: string;
  // tslint:disable-next-line: no-input-rename
  @Input('items') items: Array<any>;
  // tslint:disable-next-line: no-input-rename
  @Input('cardType') cardType: CardType;

  cardTypes = CardType;
  constructor() {}

  ngOnInit() {}
}
