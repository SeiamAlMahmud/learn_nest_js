import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployersModule } from './employers/employers.module';
import { JobsModule } from './jobs/jobs.module';
import { RouterModule } from '@nestjs/core';

// Define your AppModule here
@Module({
  imports: [
    UsersModule,
    JobsModule,
    EmployersModule,
    RouterModule.register([
      {
        path: 'jobs',
        module: JobsModule,
        // children: [
        //   {
        //     path: 'applications',
        //     module:
        //   }
        // ]
      },
    ]),
  ],
})
export class AppModule {}
