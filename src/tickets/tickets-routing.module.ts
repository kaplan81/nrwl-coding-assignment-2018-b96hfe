import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './containers/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    children: [
      // {
      //   path: step01Path,
      //   component: Step01NameComponent,
      //   data: { selectedIndex: 0 }
      // },
      // {
      //   path: step02Path,
      //   component: Step02NameComponent,
      //   data: { selectedIndex: 1 }
      // },
      // {
      //   path: step03Path,
      //   component: Step03NameComponent,
      //   data: { selectedIndex: 2 }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
