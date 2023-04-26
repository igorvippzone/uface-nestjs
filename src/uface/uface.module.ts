import { Module } from '@nestjs/common';
import { UfaceService } from './uface.service';
import { UfaceController } from './uface.controller';

@Module({
  providers: [UfaceService],
  controllers: [UfaceController],
})
export class UfaceModule {}
