import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('user');
      const isAuthenticated = !!token;
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
      return isAuthenticated;
    } else {
      return false;
    }
  }
}
