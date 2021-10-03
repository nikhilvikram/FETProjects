import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/utils/crud-http.service';
import { IUser } from 'src/app/utils/IUser'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: IUser = {
    name: "Nik",
    email: "nik25@gmail.com",
    password: "Nik",
    role: "user"
  };
  userIndex: number;
  email: string;
  pass: string;
  usersList: IUser[] = [];

  constructor(private _crudHttp: CrudHttpService) { }

  ngOnInit(): void {
    this.listOfUsers();
  }
  listOfUsers() {
    this._crudHttp.listUser().subscribe((response) => {
      this.usersList = response;
    }, (error => {

    }));
  }
  checkUser(user: any) {
    this.email = user.value.email;
    this.pass = user.value.password;
    this.userIndex = this.usersList.findIndex(data => data.password == this.pass && data.email == this.email);

    console.log(this.userIndex + " email" + this.email + " pass " + this.pass);


    if (this.userIndex >= 0) {
      alert("User has logged in " + user.value.email);
    }
    else {
      alert("Incorrect Credentials");
    }
    localStorage.setItem("userIndex",this.userIndex+"");
    console.log(localStorage.getItem("userIndex")+"LocaleStorage");
  }
}
