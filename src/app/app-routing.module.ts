import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabTwoComponent } from './tab-two/tab-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tab-two', component: TabTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
