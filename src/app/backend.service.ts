import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
}

export interface Ticket {
  id: number;
  description: string;
  assigneeId: number;
  completed: boolean;
}

function randomDelay() {
  return Math.random() * 4000;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  lastId = 1;
  storedTickets: Ticket[] = [
    {
      id: 0,
      description: 'Install a monitor arm',
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: false
    }
  ];
  storedUsers: User[] = [{ id: 111, name: 'Victor' }];

  assign(ticketId: number, userId: number) {
    const foundTicket = this.findTicketById(+ticketId);
    const user = this.findUserById(+userId);

    if (foundTicket && user) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap((ticket: Ticket) => {
          ticket.assigneeId = +userId;
        })
      );
    }

    return throwError(new Error('ticket or user not found'));
  }

  complete(ticketId: number) {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap((ticket: Ticket) => {
          ticket.completed = true;
        })
      );
    }

    return throwError(new Error('ticket not found'));
  }

  newTicket(payload: { description: string }) {
    const newTicket: Ticket = {
      id: ++this.lastId,
      description: payload.description,
      // First we assign by default to Victor.
      assigneeId: 111,
      completed: false
    };

    // No time to implement state. This is a provisional shortcut.
    this.storedTickets.push(newTicket);

    return of(newTicket).pipe(
      delay(randomDelay()),
      tap((ticket: Ticket) => this.storedTickets.push(ticket))
    );
  }

  ticket(id: number): Observable<Ticket> {
    return of(this.findTicketById(id)).pipe(delay(randomDelay()));
  }

  tickets(): Observable<Ticket[]> {
    return of(this.storedTickets).pipe(delay(randomDelay()));
  }

  users(): Observable<User[]> {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  user(id: number): Observable<User> {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  private findTicketById(id: number) {
    return this.storedTickets.find((ticket: Ticket) => ticket.id === +id);
  }

  private findUserById(id: number) {
    return this.storedUsers.find((user: User) => user.id === +id);
  }
}
