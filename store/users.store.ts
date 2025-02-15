import { Injectable, Scope } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  age: number;
}
@Injectable({ scope: Scope.TRANSIENT }) // by default it's use default scope
// @Injectable({ scope: Scope.REQUEST }) // by default it's use default scope
export class UserStore {
  private store = new Map<number, User>();
  constructor() {
    console.log('store initialized');
  }
  addUser(user: User) {
    this.store.set(user.id, user);
  }

  getUser(id: number) {
    return this.store.get(id);
  }
  getUsers() {
    return Array.from(this.store.values());
  }
  updateUser(user: User, id: number) {
    if (this.store.has(id)) {
      this.store.set(id, user);
    }
  }
  deleteUser(id: number) {
    this.store.delete(id);
  }
}

// ## DEFAULT SCOPR ##
// Single shared provider instance within module (Nestjs default)

//## REQUEST SCOPE ##
// New Instance of Provider on every request

//## TRANSSIENT SCOPE ##
// New Dedicated Instance of provider for each consumer (Whoever injects it)
