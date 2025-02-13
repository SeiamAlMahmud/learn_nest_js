import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request as Req,
} from '@nestjs/common';
import { Request } from 'express';
@Controller('/albums')
export class AlbumsController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getProfile(@Req() req: Request) {
    console.log(req.body);
    return { userId: 1, username: 'Seiam' };
  }
}
