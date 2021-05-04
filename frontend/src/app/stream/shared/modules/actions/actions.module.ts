import { ActionsService } from '../../services/actions-service/actions.service';
import { ImageModule } from '../image/image.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component/actions.component';
import { ActionTileComponent } from './action-tile/action-tile.component';

@NgModule({
  declarations: [ActionsComponent, ActionTileComponent],
  imports: [CommonModule, ImageModule],
  exports: [ActionsComponent],
  providers: [ActionsService],
})
export class ActionsModule {}
