import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRoutingModule } from './stream-routing.module';
import { StreamComponent } from './stream.component/stream.component';
import { NavbarModule } from './navbar/navbar.module';
import { ViewControllerModule } from './view-controller/view-controller.module';
import { MediaControllerModule } from './media-controller/media-controller.module';
import { OverlayService } from './shared/services/overlay-service/overlay.service';
import { ScrollService } from './shared/services/scroll-service/scroll.service';


@NgModule({
  declarations: [StreamComponent],
    imports: [
        CommonModule,
        NavbarModule,
        ViewControllerModule,
        MediaControllerModule,
        StreamRoutingModule,
        NavbarModule,
    ],
  providers: [OverlayService, ScrollService],
})
export class StreamModule {}
