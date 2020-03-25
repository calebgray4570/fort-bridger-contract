import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { RegistrationComponent } from './registration/registration.component';
import { FbraBoardComponent } from './fbra-board/fbra-board.component';
import { EventsComponent } from './events/events.component';
import { RulesAndRegsComponent } from './rules-and-regs/rules-and-regs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'fbra-board', component: FbraBoardComponent},
  { path: 'events', component: EventsComponent},
  { path: 'rules-and-regulations', component: RulesAndRegsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
