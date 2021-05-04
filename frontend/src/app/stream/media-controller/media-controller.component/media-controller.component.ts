import { OverlayService } from '../../shared/services/overlay-service/overlay.service';
import { mediaTrigger } from './media-controller.animation';
import { Component, OnInit } from '@angular/core';

enum Visiblity {
  Visible = 'visible',
  Hidden = 'hidden',
}

@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  styleUrls: ['./media-controller.component.scss'],
  animations: [mediaTrigger],
})
export class MediaControllerComponent implements OnInit {
  visiblity = Visiblity.Visible;
  constructor(private overlayService: OverlayService) {}

  ngOnInit(): void {
    this.overlayService.overlayStatus$.subscribe((status) => {
      console.log(status);
      this.visiblity = status ? Visiblity.Hidden : Visiblity.Visible;
      console.log(this.visiblity);
    });
  }
}
