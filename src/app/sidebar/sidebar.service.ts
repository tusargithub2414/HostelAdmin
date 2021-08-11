import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class Sidebar {

  constructor() { }

static routs(route:Routes):Route{
return  { path: '', component:SidebarComponent, children: route, data:{reuse:true}}

}

}
