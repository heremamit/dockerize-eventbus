import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
 console.log('30000000000!!!!');
 
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
