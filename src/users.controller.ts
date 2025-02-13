import { Controller, Get } from '@nestjs/common';
@Controller('/users')
export class UsersController {
  @Get('/profile')
  async getProfile() {
    return new Promise((resolve) => {
      resolve({ userId: 1, username: 'john_doe' });
    });
  }
}
