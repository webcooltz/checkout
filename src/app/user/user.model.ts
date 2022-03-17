export class User {
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  adminLevel!: number;

  constructor(username: string, password: string, firstName: string,
              lastName: string, email: string, adminLevel: number) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.adminLevel = adminLevel;
  }
}
