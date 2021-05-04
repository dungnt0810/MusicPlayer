import { ImageModule } from '../image/image.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component/card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ImageModule, RouterModule],
  exports: [CardComponent],
})
export class CardModule {}
