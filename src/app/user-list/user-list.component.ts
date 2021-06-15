import { Component, OnDestroy, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users?: User[];
  modalRef!: BsModalRef;
  userSub: Subscription;
  user: User = new User();

  constructor(
    private modalService: BsModalService, 
    private newUserService: UserService
  ) { 
    this.userSub = this.newUserService.users$.subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    if(this.userSub) this.userSub.unsubscribe();
  }

  openModal(template: TemplateRef<any>) { this.modalRef = this.modalService.show(template); }

  onSubmit(form: NgForm) {
    if(form.valid){
      this.newUserService.addUser(this.user);
      this.closeModal();
    }
  }

  /** Delete user */
  onDelete(user: User) {
    this.newUserService.deleteUser(user);
  }

  /** Modal Close */
  closeModal(): void{
    this.modalRef.hide();
    this.user = new User();
  }
}
