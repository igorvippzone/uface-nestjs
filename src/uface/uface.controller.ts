import { Body, Controller, Get, Ip, Param, Post } from '@nestjs/common';
import { UfaceService } from './uface.service';
import { RealIP } from 'nestjs-real-ip';

@Controller('uface')
export class UfaceController {
  constructor(private readonly ufaceService: UfaceService) {}

  @Get('setIdentifyCallBack/:ip')
  getConnect(@Param('ip') ip: string, @RealIP() myIp: string) {
    return this.ufaceService.getConnect(ip, myIp);
  }

  @Post('recognition/callback')
  postFace() {
    return this.ufaceService.postFace();
  }
}
