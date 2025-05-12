import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../classes/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public user: User;

  constructor() {
    this.user = new User();
  }

  register() {
    let users:Array<User> = JSON.parse(localStorage.getItem("users") ?? '[]');   
    users.push(this.user);
    localStorage.setItem("users",JSON.stringify(users) );
  }

  clear(){
    this.user= new User();
  }
}
