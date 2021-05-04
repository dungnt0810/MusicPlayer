import { NavbarService } from './navbar.component/services/navbar.service';
import { NavbarComponent } from './navbar.component/navbar.component';
import { NavbarItemComponent } from './navbar-item/components/navbar-item.component';
import { LogoComponent } from './logo/components/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [LogoComponent, NavbarItemComponent, NavbarComponent],
  imports: [CommonModule, NavbarRoutingModule],
  exports: [NavbarComponent],
  providers: [NavbarService],
})
export class NavbarModule {}
