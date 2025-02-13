import { Controller, Get, Request as Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('/albums')
export class AlbumsController {
  @Get()
  getProfile(@Req() req: Request) {
    console.log(req.body);
    return { userId: 1, username: 'Seiam' };
  }
}
