import { Component, OnInit } from '@angular/core';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  // demo for usage of Pipe
  numberOfStations = 10;
  numberOfHeroes = 20;
  introText = 'Welcome to Angular';

  // write a Promise here: display after 3 seconds
  sloganText = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('Trending Dev Community Blogs'), 3000);
  });

  // init
  users: User[] = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];
  newUser: User; // new User là 1 Class

  constructor() {
    this.newUser = new User();
  }

  ngOnInit(): void {}

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser]; // use Spread
    this.newUser = new User();
  }
}
