import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/Login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarNav = true;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {


firebase.initializeApp({
  apiKey: "AIzaSyBshe6tKti1u6vTLowzQd3VBgxSQ-QfCLQ",
  authDomain: "mis-clientes-68b89.firebaseapp.com",
  databaseURL: "https://mis-clientes-68b89-default-rtdb.firebaseio.com",
  projectId: "mis-clientes-68b89",
  storageBucket: "mis-clientes-68b89.appspot.com",
  messagingSenderId: "713256337463",
  appId: "1:713256337463:web:c9b960654117a341173fb2"})


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarNav = this.router.url !== '/login';
      }
    });
  }
  logout(){
     this.loginService.logout() 
  } 

}
