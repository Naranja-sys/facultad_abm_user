import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //para las variables ngModel
import { RouterModule } from '@angular/router'; //para el routerlink

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   email: string = '';
   password: string = '';

   login() {
  //   const user = JSON.parse(localStorage.getItem(this.email)!);
  //   if (user && user.password === this.password) {
  //     alert('Login exitoso');
  //     // localStorage.setItem('session', JSON.stringify(user));
  //   } else {
       alert('Usuario o contraseña incorrectos');
  //   }
   }
}
