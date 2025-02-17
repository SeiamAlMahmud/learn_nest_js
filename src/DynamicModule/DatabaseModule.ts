import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class DatabaseModule {
  static forRoot(connectionString: string): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useValue: `Connected to ${connectionString}`,
        },
      ],
      exports: ['DATABASE_CONNECTION'],
    };
  }
}
