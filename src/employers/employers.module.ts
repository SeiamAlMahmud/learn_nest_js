import { Module } from '@nestjs/common';
import { EmployersController } from './controllers/employers.controller';
import { employersAcoountController } from './controllers/employers.accounts.controller';
import { EmployersService } from './services/employers.service';
// import { UsersModule } from 'src/users/users.module';

@Module({
  // imports: [UsersModule], use it when you make it shared module
  controllers: [EmployersController, employersAcoountController],
  providers: [EmployersService],
  exports: [EmployersService],
})
export class EmployersModule {}
