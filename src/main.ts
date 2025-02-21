import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ParseDatePipe } from './jobs/parse-date.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ParseDatePipe()); // if we mention here then we don't need to declared ParseDatePipe in every controller module
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
