import { Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { JobsAccountController } from './controllers/jobs.accounts.controller';
import { JobsService } from './services/jobs.service';
import { JobsApplicationsModule } from './job-applications/jobs-application.modules';
// import { UsersModule } from 'src/users/users.module';

@Module({
  // imports: [UsersModule], use it when you make it shared module
  imports: [JobsApplicationsModule], // it is nested module
  controllers: [JobsController, JobsAccountController],
  providers: [JobsService],
  exports: [JobsService, JobsApplicationsModule],
})
export class JobsModule {}
