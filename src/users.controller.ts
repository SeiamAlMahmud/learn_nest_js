import {
  Body,
  Controller,
  Delete,
  Get,
  HostParam,
  Ip,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Request, Response } from 'express'; // for data types

@Controller({ path: '/users', host: 'app.localhost' }) // external cors check 'app.localhost'
export class UsersController {
  @Post()
  addUser(@Ip() ip: string, @HostParam() params: Record<string, any>) {
    console.log(ip);
    console.log(params.username);
    return 'User added successfully';
  }
}
