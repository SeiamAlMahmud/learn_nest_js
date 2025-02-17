import { Global, Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AccountController } from './controllers/accounts.controller';
import { UsersService } from './services/users.service';

@Global() // global module; use it in everywhere
@Module({
  controllers: [UsersController, AccountController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
