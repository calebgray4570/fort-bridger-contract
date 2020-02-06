import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { RegistrationComponent } from './registration/registration.component';
import { FbraBoardComponent } from './fbra-board/fbra-board.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tab-two', component: TabTwoComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'fbra-board', component: FbraBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
