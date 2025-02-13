import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

// Define your AppModule here
@Module({
  controllers: [UsersController],
})
export class AppModule {}
