import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/videos/:id')
  getVideos(@Param() params: Record<string, any>) {
    console.log(params);
    return `Success ${params.id}`;
  }
}
