import { Component, OnInit } from '@angular/core';
import {  TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
     users : {id:number,first_name:string,last_name:string,email:string,phone:number}[] = [
        
    ];
    isUser = false;
    
    modalRef!: BsModalRef;
    constructor(private modalService: BsModalService,private userService:UserService) {}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    generateId(){
      return ;
    }

    onSubmit(form:NgForm){
      if(form.valid){
        const obj = {id:new Date().getMilliseconds(),first_name:form.value.first_name,last_name:form.value.last_name,email:form.value.email,phone:form.value.phone} 
        this.userService.users.push(obj);  
        this.userService.addUser(this.userService.users);
        this.modalRef.hide();
        this.isUser = true;
      }
    }
    
    onDelete(id:number){
        // this.userService.removeUser(id);

        this.userService.users =  this.userService.users.filter(u=>{
          return u.id != id
        })
        localStorage.removeItem('users');
        localStorage.setItem('users',JSON.stringify(this.users));
        this.loadData();
    }
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.users = this.userService.users;
  }

}
