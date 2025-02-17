import { Controller } from '@nestjs/common';

@Controller('/employers')
export class EmployersController {
  constructor() {
    console.log('EmployersController initialized');
  }
}
