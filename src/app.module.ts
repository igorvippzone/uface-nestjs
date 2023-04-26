import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfaceModule } from './uface/uface.module';

@Module({
  imports: [UfaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
