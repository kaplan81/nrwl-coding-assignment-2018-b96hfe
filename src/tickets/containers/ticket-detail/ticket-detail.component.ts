import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BackendService, Ticket } from '../../../app/backend.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ticket-detail.component.html'
})
export class TicketDetailComponent implements OnInit {
  ticket$: Observable<Ticket>;

  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticket$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap): Observable<Ticket> => {
          return this.backend.ticket(+params.get('ticketId'));
        }
      )
    );
  }

  hasTicket(ticket: any): boolean {
    if (ticket === undefined || ticket === null) {
      return false;
    } else {
      return true;
    }
  }
}
