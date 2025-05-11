import { Component } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public user: User;
  constructor() {
    this.user = new User();
  }
}
