import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {Sidebar} from './sidebar/sidebar.service';
import {Authguard} from './login/authguard.service'
const routes: Routes = [
Sidebar.routs([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:DashboardComponent,canActivate:[Authguard] }

]),

{ path: 'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
