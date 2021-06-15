import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id!:number;
  user:any;
  @ViewChild('f') form !: NgForm;
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router) { 
    this.route.params.subscribe(params => {
      this.id= + params.id;
    }); 
  }

  ngOnInit(): void {
    this.user = this.userService.getUserbyId(this.id);
  }

  onEdit(form:NgForm){
      if(form.valid){
        const obj = {id:this.id,first_name:form.value.first_name,last_name:form.value.last_name,email:form.value.email,phone:form.value.phone} 
        console.log(obj);
       console.log(this.userService.users); 
       localStorage.removeItem('users');
       localStorage.setItem('users',JSON.stringify(this.userService.users));
        this.router.navigate(['/']);
      }
  }
  

}
