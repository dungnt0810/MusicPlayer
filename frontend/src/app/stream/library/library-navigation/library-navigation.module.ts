import { RouterModule } from '@angular/router';
import { LibNavigationService } from './library-navigation.component/services/lib-navigation.service';
import { LibraryNavigationComponent } from './library-navigation.component/library-navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
  declarations: [NavigationItemComponent, LibraryNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [LibraryNavigationComponent],
  providers: [LibNavigationService],
})
export class LibraryNavigationModule {}
