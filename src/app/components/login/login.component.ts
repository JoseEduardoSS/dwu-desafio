import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private router: Router) {
    this.logout();
  }

  login() {
    if (this.usuario === 'DWU' && this.senha === 'DWU2024') {
      localStorage.setItem('user', 'Logado');
      this.router.navigate(['/form']);
    } else {
      this.mensagemErro = 'Dados invaládos';
    }
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('user');
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
