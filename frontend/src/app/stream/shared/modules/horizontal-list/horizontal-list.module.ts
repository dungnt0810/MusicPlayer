import { CardModule } from '../card/card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HorizontalListComponent } from './horizontal-list.component/horizontal-list.component';

@NgModule({
  declarations: [HorizontalListComponent],
  imports: [CommonModule, CardModule],
  exports: [HorizontalListComponent],
  providers: [],
})
export class HorizontalListModule {}
