import { Controller, Get, Request as Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('/users')
export class UsersController {
  @Get('/profile/:id')
  async getProfile(@Req() req: Request) {
    console.log(req.params.id);
    return new Promise((resolve) => {
      resolve({ userId: 1, username: 'john_doe' });
    });
  }
}
