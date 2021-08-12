import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate{
  constructor(private credential:CredentialService, private router:Router) {

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.credential.credential){
      console.log(this.credential.credential);
      return true;
    }
    return this.router.navigate(['/login']);
  }
}
