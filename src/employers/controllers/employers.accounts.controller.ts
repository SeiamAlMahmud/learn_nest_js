import { Controller } from '@nestjs/common';

@Controller('/employees-account')
export class employersAcoountController {
  constructor() {
    console.log('employersAcoountController initialized');
  }
}
