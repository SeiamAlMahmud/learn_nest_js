import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request as Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/albums')
export class AlbumsController {
  @Get()
  // @HttpCode(HttpStatus.OK)
  getProfile(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.status(200); // HttpStatus.OK);
    res.json({ userId: 1, username: 'Seiam' });
  }
}
