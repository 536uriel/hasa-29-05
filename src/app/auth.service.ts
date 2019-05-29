import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkLogin(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }


  login(email:string,password:string){
     this.afAuth.auth.signInWithEmailAndPassword(email,password).then(
      u =>{
        localStorage.setItem('user',u.user.uid);
        this.router.navigate(['user']);
 
      }
     );
  }

  logout(){
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  constructor(public afAuth: AngularFireAuth,public DB:AngularFireDatabase,public router:Router) { }
}
