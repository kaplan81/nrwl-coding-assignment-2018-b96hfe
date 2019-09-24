import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ticket } from '../../app/backend.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dem-ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent {
  @Input() ticket: Ticket;
}
