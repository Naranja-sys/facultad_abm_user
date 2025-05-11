import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //para el ruterlink

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // isAuthenticated: boolean = !!localStorage.getItem('session'); // Verificamos sesión

  // logout() {
    // localStorage.removeItem('session');
    // this.isAuthenticated = false;
  // }
}
