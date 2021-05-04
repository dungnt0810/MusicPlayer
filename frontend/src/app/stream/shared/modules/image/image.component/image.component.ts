import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('url') url: string;
  // tslint:disable-next-line: no-input-rename
  @Input('artist') artist = false;

  constructor() {}

  ngOnInit() {}
}
