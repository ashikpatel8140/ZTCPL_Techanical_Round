import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : {id:number,first_name:string,last_name:string,email:string,phone:number}[] = [
        
  ];
  constructor() {

    var ok!: any;
    ok = localStorage.getItem('users');
   
   this.users = JSON.parse(ok);
   }

  addUser(data:any){
      localStorage.setItem('users', JSON.stringify(data));
  }
  // getAllUsers(): any{
  //   var ok!: any;
  //    ok = localStorage.getItem('users');
    
  //   this.users = JSON.parse(ok);
  // }
  getUserbyId(id:number){
    
      const user =  this.users.find(u=>{
            return u.id == id;
        });
        return user;
  }

  removeUser(id:number){
    
  // this.users =  this.users.filter(u=>{
  //     return u.id != id
  //   })
  //   localStorage.removeItem('users');
  //   localStorage.setItem('users',JSON.stringify(this.users));
  }
}