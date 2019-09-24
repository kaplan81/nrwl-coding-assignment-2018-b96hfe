import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: () =>
      import('../tickets/tickets.module').then(mod => mod.TicketsModule)
  },
  {
    path: '**',
    redirectTo: '/tickets'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
