import { Controller, Get } from '@nestjs/common';
import { AppService, AppVersion } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): AppVersion {
    return this.appService.getVersion();
  }
}
