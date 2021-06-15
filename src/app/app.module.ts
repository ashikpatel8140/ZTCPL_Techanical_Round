import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NumberDirective } from './directives/numbers-only.directive';
import { NoSpaceDirective } from './directives/no-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EditUserComponent,
    NumberDirective,
    NoSpaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
