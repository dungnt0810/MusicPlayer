import { routeAnimation } from './library.animation';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  animations: [routeAnimation],
})
export class LibraryComponent implements OnInit {
  currentIndex = 1;
  constructor() {}

  ngOnInit() {}

  prepareOutlet(outlet: RouterOutlet) {
    const nextIndex: number = outlet.activatedRouteData.index;
    let indexDiff: number = nextIndex - this.currentIndex;
    indexDiff /= Math.abs(indexDiff);
    const animationParams = outlet.activatedRouteData.animation;
    animationParams.params.indexDiff = indexDiff * 100;
    animationParams.params.rindexDiff = indexDiff * -100;
    if (this.currentIndex !== nextIndex) {
      this.currentIndex = nextIndex;
    }
    return animationParams;
  }
}
