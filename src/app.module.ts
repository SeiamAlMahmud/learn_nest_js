import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { Config } from 'config/config';

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    { provide: 'DATABASE_NAME', useValue: 'MOON_NIGHT' },
    { provide: 'MAIL', useValue: ['admin@gmail.com', 'no-reply@gmail.com'] },
    {
      provide: Config,
      // provide: 'ENV_CONFIG',
      useValue: {
        type: 'DEV',
        node: '20',
      },
    },
  ],
})
export class AppModule {}
