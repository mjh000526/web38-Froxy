import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getGists(): Promise<string> {
    return await this.appService.getGists();
  }

  @Get('gists/:id')
  async getGistById(@Param('id') id: number): Promise<string> {
    return await this.appService.getGistById(id);
  }
}
