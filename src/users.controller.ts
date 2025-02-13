import { Controller, Get, Req, Res, Param, Query,Headers } from '@nestjs/common';
import { Request, Response } from 'express';

interface QueryParams {
  id: number;
  name: string; // if i give number instead of string , i didn't get any error , because in runtime javascript can't check
}
@Controller('/users')
export class UsersController {
  @Get('/videos')
  getVideos(@Headers() headers: Record<string, any>) {
    //directly use it
    console.log(headers);
    return headers;
  }
}
