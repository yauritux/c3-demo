import { Injectable } from '@nestjs/common';

export type AppVersion = {
  status: string;
  version: string;
};

@Injectable()
export class AppService {
  getVersion(): AppVersion {
    const version = Math.floor(Math.random() * 999);
    return {
      version: `v${version}`,
      status: 'OK',
    };
  }
}
