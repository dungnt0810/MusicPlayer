import { StreamComponent } from './stream.component/stream.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StreamComponent,
    children: [
      // {
      //   path: 'discover',
      //   loadChildren: () =>
      //     import('./discover/discover.module').then((m) => m.DiscoverModule),
      // },
      // {
      {
        path: 'library',
        loadChildren: () =>
          import('./library/library.module').then((m) => m.LibraryModule),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('./shared/playlist-detail/playlist-detail.module').then(
            (m) => m.PlaylistDetailModule
          ),
      },
      {
        path: '',
        // redirectTo: 'discover',
        redirectTo: 'library',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamRoutingModule {}
