import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router,private cookies:CookieService) {}
  token: string | null = '';

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token
            this.cookies.set('token',this.token)
            this.router.navigate([''])
          }
        )
      }
    )
  }

 /*  register(email: string, password: string, username: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => updateProfile(response.user, { displayName: username }));

    return from(promise);
  } */

  getIdToken() {
    return this.cookies.get('token');
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.token=''
      this.cookies.set('token',this.token)
      this.router.navigate(['/login'])
    })
  }
}
