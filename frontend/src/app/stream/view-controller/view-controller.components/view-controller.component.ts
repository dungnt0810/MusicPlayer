import { fadeTrigger, blurTrigger } from './view-controller.animation';
import { OverlayService } from '../../shared/services/overlay-service/overlay.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-controller',
  templateUrl: './view-controller.component.html',
  styleUrls: ['./view-controller.component.scss'],
  animations: [fadeTrigger, blurTrigger],
})
export class ViewControllerComponent implements OnInit {
  overlay = false;
  constructor(
    private overlayService: OverlayService,
    // tslint:disable-next-line: variable-name
    private _router: Router
  ) {}

  routeIncludes(url: string): boolean {
    return this._router.url.includes(url);
  }

  ngOnInit() {
    this.overlayService.overlayStatus$.subscribe((status) => {
      this.overlay = status;
    });
  }

  updateOverlayStatus(status: boolean) {
    this.overlayService.updateOverlayStatus(status);
  }
}
