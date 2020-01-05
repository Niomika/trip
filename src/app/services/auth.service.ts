import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User} from 'firebase';
import {Role} from '../models/role';
//import {User} from '../models/user';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

export interface Credentials {
  email: string;
  password: string;
 }
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  private usersCollection: AngularFirestoreCollection<User>;
  user: User;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = this.db.collection<User>('users');
    this.usersCollection = this.db.collection<User>('users');
  }
 
  getUser(): User | null {    
    return this.user;
  }
 
  login({email, password}: Credentials) {
    const session = auth.Auth.Persistence.SESSION;
    return this.fireAuth.auth.setPersistence(session).then(() => {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    });
  }
 
  register({email, password}: Credentials) {    
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
 
  logout() {
    return this.fireAuth.auth.signOut();
  }
  isAdmin(): boolean {
    //return this.user && this.user.role && this.user.role.role === 'admin';
    return true;
  }
  isUserLoggedIn(): boolean {
    if (this.user)
    return true;
   }

   addUserToDatabase(User: User){
   this.usersCollection.add(User);
    return of(User);
   }
}
