import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user.model";

@Injectable({
  providedIn:'root'
})
export class UserService {

  user: User = {
    username: 'tdog',
    password: 'dog',
    firstName: 'tyler',
    lastName: 'tucker',
    email: 'tylertucker55@gmail.com',
    adminLevel: 1,
    id: '0'
  }

  users: User[] = [
    {
      username: 'tdog',
      password: 'dog',
      firstName: 'tyler',
      lastName: 'tucker',
      email: 'tylertucker55@gmail.com',
      adminLevel: 1,
      id: '0'
    },
    {
      username: 'ddog',
      password: 'dogg',
      firstName: 'john',
      lastName: 'dogeman',
      email: 'johnd@shop.com',
      adminLevel: 1,
      id: '1'
    }
  ];

  constructor() {

  }

  userChanged = new Subject<User>();
  usersChanged = new Subject<User[]>();

  // 1 = admin
  // 2 = shop admin
  // 3 = shop employee
  // 4 = customer

  fetchUser() {

  }

  storeUser() {

  }

  getUser() {
    return this.users[0];
  }

  getUsers() {
    return this.users;
  }

  createUser() {

  }

  deleteUser(user: User) {
    if (!user) {
      return;
   }
   const pos = this.users.indexOf(user);
   if (pos < 0) {
      return;
   }
   this.users.splice(pos, 1);
   this.usersChanged.next(this.users.slice());

   this.storeUser();
  }

  updateUser(user: User) {
    if (!user) {
      return;
    }

    this.user = user;
    this.userChanged.next(this.user);

    this.storeUser();
  }
}
