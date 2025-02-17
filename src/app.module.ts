import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployersModule } from './employers/employers.module';
import { JobsModule } from './jobs/jobs.module';

// Define your AppModule here
@Module({
  imports: [UsersModule, JobsModule, EmployersModule],
})
export class AppModule {}
