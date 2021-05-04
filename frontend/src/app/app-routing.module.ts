import { NotAuthenticatedGuard } from './shared/route-guards/not-authenticated.guard';
import { IsAuthenticatedGuard } from './shared/route-guards/is-authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    canActivate: [NotAuthenticatedGuard],
    canActivateChild: [NotAuthenticatedGuard],
    loadChildren: () =>
      import('./authentication/authentication.module').then((m) => m.AuthenticationModule
      ),
  },
  {
    path: 'stream',
    canActivate: [IsAuthenticatedGuard],
    canActivateChild: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./stream/stream.module').then((m) => m.StreamModule),
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
