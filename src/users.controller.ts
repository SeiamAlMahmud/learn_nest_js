import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/videos/:id')
  getVideos(@Param('id') param: number) {
    //directly use it
    console.log(param);
    return `Success ${param}`;
  }
}
