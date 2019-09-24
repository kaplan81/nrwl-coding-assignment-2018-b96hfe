import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackendService } from '../../../app/backend.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {
  tickets$ = this.backend.tickets();

  constructor(private backend: BackendService) {}

  addTicket(description: string): void {
    if (description.length > 0) {
      this.backend.newTicket({ description });
    }
  }
}
