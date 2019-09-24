import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackendService } from '../../../app/backend.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {}
}
