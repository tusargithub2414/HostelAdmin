import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { Authguard } from '../login/authguard.service';
import { SidebarComponent } from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class Sidebar {

  constructor() { }

static routs(route:Routes):Route{
return  { path: '', component:SidebarComponent, canActivate :[Authguard], children: route, data:{reuse:true}}

}

}
