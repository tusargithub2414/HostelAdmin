import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {Sidebar} from './sidebar/sidebar.service'
const routes: Routes = [
Sidebar.routs([
  // { path: '', redirectTo: 'home', pathMatch: 'full', },
  { path: 'home', component:HeaderComponent },
  { path: 'login', component:LoginComponent}
])



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
