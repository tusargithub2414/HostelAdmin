import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
public credential;
  constructor() {
    // console.log(localStorage.getItem(JSON.parse('user')))
    if(typeof localStorage.getItem(JSON.parse('user'))!== null)
    this.credential = localStorage.getItem(JSON.parse('user'));
    console.log(this.credential);
   }

  // getCredential(){
  //   return this.credential.tokan
  // }
}
