import { routeAnimation } from './animations/authentication.animation';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [routeAnimation],
})
export class AuthenticationComponent implements OnInit {
  currentIndex = 1;
  constructor() {}

  ngOnInit(): void {}

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
