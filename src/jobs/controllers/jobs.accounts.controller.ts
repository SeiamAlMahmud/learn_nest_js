import { Controller } from '@nestjs/common';

@Controller('/job-account')
export class JobsAccountController {
  constructor() {
    console.log('JobsController initialized');
  }
}
