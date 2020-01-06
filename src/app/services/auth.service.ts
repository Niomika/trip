import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User as fireUser } from 'firebase';
import { User } from '../models/user';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Credentials {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<fireUser | null> = this.fireAuth.authState;
  private usersCollection: AngularFirestoreCollection<User>;
  user: User;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = this.db.collection<User>('users');
  }

  getDatabaseUser(): User {
    return this.user;
  }

  getUser(): fireUser | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ email, password }: Credentials) {
    const session = auth.Auth.Persistence.SESSION;
    return this.fireAuth.auth.setPersistence(session).then(() => {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    });
  }

  register(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  isAdmin(): boolean {
    console.log(this.user);
    if (this.user && this.user.role === "admin") {
      return true;
    }
    return false;

  }
  isUserLoggedIn(): boolean {
    if (this.fireAuth.auth.currentUser) {
      return true;
    }
  }

  addUserToDatabase(User: User) {
    this.usersCollection.add(User);
    return of(User);
  }

  getUsers(): Observable<User[]> {
    return this.usersCollection.valueChanges();
  }

  setUser(user: User) {
    this.user = user;
  }

}
