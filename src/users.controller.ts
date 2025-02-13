import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  Query,
  Headers,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express'; // for data types

@Controller('/users')
export class UsersController {
  @Post('/videos')
  addVideos(@Body() requestData: Record<string, any>) {
    console.log(requestData);
    return { success: true };
  }
}
