import { User } from "./model/user";
import { Role } from "./model/role";
//import { Requests } from "./model/reimbursment";

// export let requests: Requests[] = [
//   new Requests(1, 3, '2019-04-01'),
//   new Requests(2, 5, '2019-04-02'),
//   new Requests(3, 1, '2019-04-03'),
//   new Requests(4, 4, '2019-04-04'),
//   new Requests(5, 2, '2019-04-05'),
//   new Requests(6, 3, '2019-04-06'),
// ];

export let users: User[] = [
  new User(1, 'username', 'password', 'shahram', 'saghri', 'email', new Role(1, 'finance-manager'))
  //new User(2, 'Bradley')
  // new Employee(3, 'Shahram'),
  // new Employee(4, 'Pj'),
  // new Employee(5, 'Danae'),
  // new Employee(6, 'Fred'),
];


