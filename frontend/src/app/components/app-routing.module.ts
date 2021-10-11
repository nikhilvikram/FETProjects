import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserDashComponent },
  { path: 'admin', component: AdminDashComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
