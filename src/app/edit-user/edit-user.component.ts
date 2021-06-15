import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { NewUserService } from '../services/user.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id!: number;
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newUserService: NewUserService
  ) {
    this.route.params.subscribe(params => {
      this.id = + params.id;
      this.user = this.newUserService.getUserbyId(this.id);
    });
  }

  ngOnInit(): void {
  }

  onEdit(form: NgForm) {
    if (form.valid) {
      this.newUserService.updateUser(this.user);
      this.router.navigate(['/']);
    }
  }
}
