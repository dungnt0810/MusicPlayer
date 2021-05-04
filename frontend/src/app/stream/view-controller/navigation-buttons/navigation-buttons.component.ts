import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

enum History {
  Back,
  Forward,
}

@Component({
  selector: 'app-view-controller-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent implements OnInit {
  public History = History;
  constructor(private locationService: Location) {}

  ngOnInit() {}

  public navigate(location: History) {
    if (location === History.Back) {
      this.locationService.back();
    } else if (location === History.Forward) {
      this.locationService.forward();
    }
  }
}
