import { Injectable } from "@angular/core";
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
    adminLevel: 1
  }

  fetchUser() {

  }

  storeUser() {

  }

  getUser() {
    return this.user;
  }

  getUsers() {

  }

  createUser() {

  }

  deleteUser() {

  }
}
