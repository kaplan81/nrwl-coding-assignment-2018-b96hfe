import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketAddComponent } from './containers/ticket-add/ticket-add.component';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketsComponent } from './containers/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'ticket/:ticketId',
    component: TicketDetailComponent
  },
  {
    path: 'new-ticket',
    component: TicketAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
