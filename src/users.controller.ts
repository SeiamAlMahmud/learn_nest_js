import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';

interface VideoParams {
  id: number;
  name: string; // if i give number instead of string , i didn't get any error , because in runtime javascript can't check
}
@Controller('/users')
export class UsersController {
  @Get('/videos/:id/:name')
  getVideos(@Param() params: VideoParams) {
    //directly use it
    console.log(params);
    return `Success ${params.id}`;
  }
}
