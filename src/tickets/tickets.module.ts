import { NgModule } from '@angular/core';
import { SharedModule } from '../app/_shared/shared.module';
import { TicketComponent } from './components/ticket.component';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  declarations: [TicketsComponent, TicketDetailComponent, TicketComponent],
  imports: [TicketsRoutingModule, SharedModule]
})
export class TicketsModule {}
