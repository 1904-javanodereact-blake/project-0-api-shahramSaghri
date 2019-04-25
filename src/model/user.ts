import { Role } from './role';

export class User {
  userid: number; // primary key
  username: string; // not null, unique
  password: string; // not null
  firstname: string; // not null
  lastname: string; // not null
  email: string; // not null
  role: Role; // not null


  constructor(userid = 0, username = '', password = '', 
              firstName = '', lastName = '', email = '', role: Role = undefined) {
    this.userid = userid;
    this.username = username;
    this.password = password;
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
    this.role = role;
  }
}