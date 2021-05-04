import { LibraryNavigationInterface } from '../shared/interfaces/lib-navigation-item.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'library-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('item') item: LibraryNavigationInterface;
  constructor() {}

  ngOnInit() {}
}
