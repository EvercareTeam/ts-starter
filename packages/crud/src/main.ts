import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // apply global validation via class-validator for all classes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
      skipMissingProperties: false,
    })
  );
  app.enableShutdownHooks();

  await app.listen('3000', '127.0.0.1');

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
