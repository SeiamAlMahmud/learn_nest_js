import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserStore } from './users.store';

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserStore], // when provide & userClass are same then use this way
  // providers: [{ provide: UserStore, useClass: UserStore }],
})
export class AppModule {}
