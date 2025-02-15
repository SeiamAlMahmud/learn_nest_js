import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

// const IS_DEV_MODE = false;
// // Define your AppModule here
// @Module({
//   controllers: [UsersController, AlbumsController],
//   providers: [
//     {
//       provide: 'EVENT_STORE',
//       // useFactory: (limit: number) => {
//       useFactory: (limit: number = 4) => {
//         // ekhane default value 4 kore disi. tai na paile se 4 dhore nibe
//         const eventBu$ = IS_DEV_MODE
//           ? new ReplaySubject(limit)
//           : new BehaviorSubject(null);
//         console.log(limit);
//         return eventBu$;
//       },
//       // inject: ['LIMIT'],
//       inject: [{ token: 'LIMIT', optional: true }], // optional kore disi tai paile valo, na paile somossha nai and optional true dewya lagbe nahole se pabe na
//     },
//     // {
//     //   provide: 'LIMIT',
//     //   useValue: 2, // ekhane dei nai karon upore undefine kore disi
//     // },
//   ],
// })

@Injectable() // dependencies hisebe use korbo bole amk eta import kore use kora lagtese
class EnvConfig {
  envType: 'DEV' | 'STAGE' | 'PROD';
  constructor() {
    this.envType = 'DEV';
  }
}

// Define your AppModule here
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    {
      provide: 'EVENT_STORE',
      useFactory: (config: EnvConfig, limit: number = 4) => {
        const eventBu$ =
          config.envType === 'DEV'
            ? new ReplaySubject(limit)
            : new BehaviorSubject(null);
        console.log(config, limit);
        return eventBu$;
      },
      inject: [EnvConfig, { token: 'LIMIT', optional: true }],
    },
    EnvConfig, // Standard Provider Configuration
    {
      provide: 'LIMIT',
      useValue: 2,
    },
  ],
})
export class AppModule {}
