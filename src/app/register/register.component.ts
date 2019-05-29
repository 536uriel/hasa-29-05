import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  successMessage: string;

  goLogin(){
    this.router.navigate(['login']);
  }

  registerForm = new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(' '),
  });

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  constructor(private authService:AuthService,private router:Router) {

    
   }

  ngOnInit() {
 
  }

}
