import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
export interface User {
  name: string;
  age: number;
  id: number;
  salary: number;
  isActive: boolean;
}
@Injectable()
export class JobsService {
  private store = new Map<number, User>();
  createJob(user: User) {
    if (this.store.has(user.id)) {
      throw new BadGatewayException('User already exists in store');
    }
    this.store.set(user.id, user);
    const newUser = this.findJobById(user.id);
    return newUser;
  }
  // addUser(user: User) {
  //   return this.store.set(user.id, user);
  // }
  findJobById(id: number) {
    return this.store.get(id) || {};
  }
  incSalary(id: number, inc: number) {
    const user = this.store.get(id);
    if (!user) return new NotFoundException('user not found in store');
    if (user) {
      user.salary += inc;
      this.store.set(id, user);
    }
    return user || {};
  }

  toggleJobStatus(id: number, active: boolean) {
    const user = this.store.get(id);
    if (!user) return new NotFoundException('user not found in store');
    if (user) {
      user.isActive = active;
      this.store.set(id, user);
    }
    return user || {};
  }
}
