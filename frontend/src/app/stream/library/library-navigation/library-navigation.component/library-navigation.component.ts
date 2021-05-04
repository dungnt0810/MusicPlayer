import { LibraryNavigationInterface } from '../shared/interfaces/lib-navigation-item.interface';
import { LibNavigationService } from './services/lib-navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'library-navigation',
  templateUrl: './library-navigation.component.html',
  styleUrls: ['./library-navigation.component.scss'],
})
export class LibraryNavigationComponent implements OnInit {
  items: Array<LibraryNavigationInterface>;

  constructor(private navigationService: LibNavigationService) {}

  ngOnInit() {
    this.items = this.navigationService.items;
  }
}
