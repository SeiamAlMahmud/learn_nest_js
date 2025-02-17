import { Controller } from '@nestjs/common';

@Controller()
export class JobsController {
  constructor() {
    console.log('JobsController initialized');
  }
}
