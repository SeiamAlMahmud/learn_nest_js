import { ParseDateOptions, ParseDatePipe } from './parse-date.pipe';
import { Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { JobsAccountController } from './controllers/jobs.accounts.controller';
import { JobsService } from './services/jobs.service';
import { JobsApplicationsModule } from './job-applications/jobs-application.modules';
import { APP_PIPE } from '@nestjs/core';
// import { UsersModule } from 'src/users/users.module';

@Module({
  // imports: [UsersModule], use it when you make it shared module
  imports: [JobsApplicationsModule], // it is nested module
  controllers: [JobsController, JobsAccountController],
  providers: [
    JobsService,
    {
      provide: ParseDateOptions,
      useValue: { fromTimeStamp: true, errorMsg: 'Date transformation failed' },
    },
    {
      provide: APP_PIPE,
      useClass: ParseDatePipe, // Dependency injection will woirk  because the pipe is created inside the application contex. We cacn inject options but only from the declaring module.
    },
  ],
  exports: [JobsService, JobsApplicationsModule],
})
export class JobsModule {}
