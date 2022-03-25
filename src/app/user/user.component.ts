import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  role!: string;
  @ViewChild('f') uForm!: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();

    // logic for the user's role
    if (this.user.adminLevel == 1) {
      this.role = 'Admin';
    } else if (this.user.adminLevel == 2) {
      this.role = 'Store Manager';
    } else if (this.user.adminLevel == 3) {
      this.role = 'Employee';
    } else if (this.user.adminLevel == 4) {
      this.role = 'Customer';
    } else {
      this.role = 'Unknown';
    }

  }

  savePreferences(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.username, value.password, value.firstName, value.lastName, value.email, value.adminLevel, '');

    this.userService.updateUser(newUser);

    // this.uForm.reset();
  }

  onDelete() {
    this.userService.deleteUser(this.user);
  }

}
