import { Controller, Get } from '@nestjs/common';
import { UserStore } from 'store/users.store';
import { HttpStatus} from 'http-status-string';
@Controller('/users') // external cors check 'app.localhost'
export class UsersController {
  constructor(private store: UserStore) {
    console.log('controller initialized');
  }
  @Get()
  getUsers() {
    console.log(HttpStatus.SERVICE_UNAVAILABLE_503);
    return 'Route called';
  }
}
