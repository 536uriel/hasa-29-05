import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  doRegister(){
    this.router.navigate(['register']);
  }

  constructor(public user:AuthService,private router:Router) { }

  ngOnInit() {
  }

}
