import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
    data: { title: 'App' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // restaura scroll ao navegar
      anchorScrolling: 'enabled'            // ativa âncoras (#servicos etc.)
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}