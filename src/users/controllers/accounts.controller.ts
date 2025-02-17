import { Controller } from '@nestjs/common';

@Controller('/accounts')
export class AccountController {
  constructor() {
    console.log('AccountController initialized');
  }
}
