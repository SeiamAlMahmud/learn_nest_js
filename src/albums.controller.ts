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
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    //  passthrough use korle Nest Js autoomatically handle kore statuscode
    console.log(req.body);
    res.status(HttpStatus.OK); // HttpStatus.OK);
    res.json({ userId: 1, username: 'Seiam' });
  }
}
