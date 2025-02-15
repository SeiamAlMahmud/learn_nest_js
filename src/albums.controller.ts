import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request as Req,
  Res,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/albums')
export class AlbumsController {
  constructor() {
    console.log('AlbumsController initialized');
  }
}
