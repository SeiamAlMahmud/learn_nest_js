import { Controller } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  constructor() {
    console.log('UsersController initialized');
  }
}
