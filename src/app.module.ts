import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserStore } from '../store/users.store';
import { Store } from 'store/store';

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  // providers: [UserStore], // when provide & userClass are same then use this way
  // providers: [{ provide: UserStore, useClass: UserStore }],
  providers: [UserStore, { provide: Store, useClass: UserStore }],
})
export class AppModule {}
