import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormularioComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
