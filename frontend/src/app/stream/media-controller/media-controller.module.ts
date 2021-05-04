import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import { MediaControllerComponent } from './media-controller.component/media-controller.component';

@NgModule({
  declarations: [MediaControllerComponent, ControlsComponent],
  imports: [CommonModule],
  exports: [MediaControllerComponent],
})
export class MediaControllerModule {}
