import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './shared/home/home.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, //si o si ultima posicion redireccionador
];
