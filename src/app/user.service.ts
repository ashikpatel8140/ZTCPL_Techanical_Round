import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : {
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone:number
  }[] = [];

  constructor() {
    var usersArray!: any;
    usersArray = localStorage.getItem('users');
    if(usersArray){
      this.users = JSON.parse(usersArray);
    }
   }

  addUser(data:any){
      localStorage.setItem('users', JSON.stringify(data));
  }
 
  getUserbyId(id:number){
      const user =  this.users.find(user=> user.id == id);
      return user;
  }
}
