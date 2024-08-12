import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  login(form: NgForm) {
    const email = form.value.email,
      password = form.value.contra;

    this.loginService.login(email, password);
  }
}
