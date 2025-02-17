import { User, UserService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dt';
@Controller('/users') // external cors check 'app.localhost'
export class UsersController {
  constructor(private userService: UserService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.userService.addUser(createUserDto);
    return 'User created successfully';
  }
  @Get()
  findAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: number): User | string {
    const user = this.userService.getUser(+id); // (+) make it number
    if (!user) {
      return 'User not found';
    }
    return user;
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserData: CreateUserDTO) {
    this.userService.updateUser(updateUserData, +id);
    return { meddage: 'USER UPDATE' };
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
    return { message: 'User deleted' };
  }
}
