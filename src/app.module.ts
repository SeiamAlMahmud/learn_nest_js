import { UserStore } from './../store/users.store';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserStore],
})
export class AppModule {}
