import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Request, Response } from 'express'; // for data types
import { CreateUserDTO } from './dto/create-user.dt';
const USERS: CreateUserDTO[] = [];
@Controller('/users')
export class UsersController {
  @Post()
  addUser(@Body() createUserDTO: CreateUserDTO) {
    USERS.push(createUserDTO);
    return 'User added successfully';
  }

  @Get()
  getUsers() {
    return USERS;
  }
  @Get(':id')
  getUser(@Param() param: { id: string }) {
    return USERS.find((user) => user.id === param.id);
  }
  @Put(':id')
  PutUser(
    @Param() param: { id: string },
    @Body() updatedUserDTO: CreateUserDTO,
  ) {
    const userIdx = USERS.findIndex((user) => user.id === param.id);
    if (!userIdx) {
      return;
    }
    USERS[userIdx] = updatedUserDTO;
    return USERS;
  }
  @Delete(':id')
  DeleteUser(@Param() param: { id: string }) {
    const userIdx = USERS.findIndex((user) => user.id === param.id);
    if (userIdx !== -1) {
      USERS.splice(userIdx, 1);
      return USERS;
    }
    return USERS;
  }
}
