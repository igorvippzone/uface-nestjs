import { Injectable } from '@nestjs/common';

@Injectable()
export class UfaceService {
  getConnect(deviceIp: string, myIp: string) {
    const query = `pass=1&callbackUrl=http://localhost:3000/uface`;
    fetch(
      `http://${deviceIp}:8090/setIdentifyCallBack?${query}/recognition/callback`,
      {
        method: 'POST',
      },
    );
    return 'connect' + deviceIp;
  }

  postFace() {
    return 'postFace';
  }
}
