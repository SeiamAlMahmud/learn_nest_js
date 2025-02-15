import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  age: number;
}
@Injectable()
export class Store {
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
