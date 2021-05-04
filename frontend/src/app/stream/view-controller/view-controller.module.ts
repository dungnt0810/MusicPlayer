// import { SearchModule } from './search/search.module';
import { RouterModule } from '@angular/router';
import { ViewControllerComponent } from './view-controller.components/view-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { LibraryNavigationModule } from '../library/library-navigation/library-navigation.module';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    ViewControllerComponent,
    NavigationButtonsComponent,
    OverlayComponent,
  ],
  imports: [CommonModule,
    // SearchModule,
    RouterModule, LibraryNavigationModule],
  providers: [Location],
  exports: [ViewControllerComponent],
})
export class ViewControllerModule {}
