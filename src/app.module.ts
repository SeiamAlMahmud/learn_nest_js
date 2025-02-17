import { UserStore } from './../store/users.store';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserService } from './users.service';

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserService],
})
export class AppModule {}
