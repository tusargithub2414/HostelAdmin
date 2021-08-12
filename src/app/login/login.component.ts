import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user = {
  tokan:'xyz'
};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
this.router.navigate(['/home'])
localStorage.setItem('user', JSON.stringify(this.user) )
  }
}
