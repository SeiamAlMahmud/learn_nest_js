import {
  Body,
  Controller,
  Delete,
  Get,
  HostParam,
  Inject,
  Ip,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Request, Response } from 'express'; // for data types
import { UserStore } from './users.store';

@Controller('/users') // external cors check 'app.localhost'
export class UsersController {
  constructor(@Inject(UserStore) private store: UserStore) {
    // constructor(private store: UserStore) {
    console.log(this.store);
  }
}
