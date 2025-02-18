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
  experience: number;
}
@Injectable()
export class JobsService {
  private store = new Map<number, User>();
  createJob(user: User) {
    if (this.store.has(user.id)) {
      throw new BadGatewayException('User already exists in store');
    }
    this.store.set(user.id, user);
    const newUser = this.store.get(user.id);
    return newUser;
  }

  findJobById(id: number) {
    const user = this.store.get(id);
    console.log(user);
    return user;
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
  setJobExp(id: number, exp: number) {
    const user = this.store.get(id);
    if (!user) return new NotFoundException('user not found in store');
    if (user) {
      user.experience = exp;
      this.store.set(id, user);
    }
    return user || {};
  }
}
