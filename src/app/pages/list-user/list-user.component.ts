import { Component } from '@angular/core';
import { User } from '../../classes/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  imports: [MatTableModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  public users = Array<User>;
  displayedColumns: string[] = ['email', 'password'];

  constructor() {
    this.users = JSON.parse(localStorage.getItem("users") ?? '[]');
  }
}
