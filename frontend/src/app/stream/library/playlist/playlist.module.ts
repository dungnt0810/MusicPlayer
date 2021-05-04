import { LoadingIndicatorModule } from './../../../shared/components/loading-indicator/loading-indicator.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorizontalListModule } from '../../shared/modules/horizontal-list/horizontal-list.module';
import { PlaylistComponent } from './playlist.component/playlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import {PlaylistService} from '../../shared/services/data-service/playlist.service';

@NgModule({
  declarations: [PlaylistComponent, CreateDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingIndicatorModule,
    HorizontalListModule,
  ],
  exports: [PlaylistComponent],
  providers: [PlaylistService],
})
export class PlaylistModule {}
