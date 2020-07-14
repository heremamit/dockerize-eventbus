import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
const axios = require('axios');
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/helloworld')
  getHello(): string {

    return this.appService.getHello();
    
  }

  @Get('/busevents')
  recieveEvents()
  {  
    let event = 'event bus sending';
    console.log(event);
    axios.get('http://operations-clusterip-srv:3000/postevents');
    return this.appService.getHello();

}
}
