import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request as Req,
  Res,
  Header,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/albums')
export class AlbumsController {
  @Get()
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'none')
  @Header('X-name', 'Mahmud')
  getProfile(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);

    res.json({ userId: 1, username: 'Seiam' });
  }
}
