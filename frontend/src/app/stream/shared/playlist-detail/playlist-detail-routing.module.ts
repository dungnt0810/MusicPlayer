import { PlaylistDetailComponent } from './playlist-detail.component/playlist-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':playlist-id',
    component: PlaylistDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistDetailRoutingModule {}
