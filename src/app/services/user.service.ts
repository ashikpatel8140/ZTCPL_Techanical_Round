import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = new BehaviorSubject<User[]>([]);
    users$ = this.users.asObservable();

    setUser(users: User[]) {
        this.users.next(users);
    }

    clearUsers() {
        this.users.next([]);
    }

    constructor() {
        var usersArray!: any;
        usersArray = localStorage.getItem('users');
        if (usersArray) {
            let users: User[] = JSON.parse(usersArray);
            this.setUser(users);
        }
    }

    /** Add user into list */
    addUser(user: User) {
        if(!this.users.getValue()?.length){
            this.users.next([]);
        }
        this.users.getValue().push(new User(user));
        this.updateLocalStorage();
    }

    /** Update user data */
    updateUser(user: User): void{
        this.users.getValue().map(u => {
            if(u.id === user.id){
                u = user;
            }
        });
        this.updateLocalStorage();
    }

    /** Delete user from list */
    deleteUser(user: User) {
        this.users.getValue().splice(this.users.getValue().indexOf(user), 1);
        this.updateLocalStorage();
    }

    /** Update data into local storage */
    updateLocalStorage(): void{
        localStorage.setItem('users', JSON.stringify(this.users.getValue()));
    }

    /** Get user from array to edit its detail */
    getUserbyId(id: number): User {
        const user = this.users.getValue().find(user => user.id === id);
        if (user)
            return user;
        else
            return null!;
    }
}