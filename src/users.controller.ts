import { Controller, Inject } from '@nestjs/common';
import { Config } from 'config/config';

@Controller('/users') // external cors check 'app.localhost'
export class UsersController {
  constructor(private config: Config) {
    console.log(this.config);
  }
}
