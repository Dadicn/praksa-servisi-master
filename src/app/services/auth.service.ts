import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { timeoutWith } from "rxjs/operators";

export interface IUser {
    firstName: string;
    lastName: string;
    isMember: boolean;
}

@Injectable({
    
providedIn: 'root'
})

export class AuthService {
    isLoggedIn = false;
   

    public user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
        firstName: '',
    lastName: '',
    isMember: false
    });

    member() {
    this.user$.next({
        firstName: '',
    lastName: '',
    isMember: true
    })
    }

    login(userD: IUser): void {
       this.isLoggedIn = true;
       this.user$.next(userD);
    }

    logout(): void {
        this.isLoggedIn = false;
        this.user$.next({
            firstName: '',
    lastName: '',
    isMember: false
});
     }

}