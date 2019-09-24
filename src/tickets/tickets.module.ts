import { NgModule } from '@angular/core';
import { SharedModule } from '../app/_shared/shared.module';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [TicketsRoutingModule, SharedModule]
})
export class TicketsModule {}
