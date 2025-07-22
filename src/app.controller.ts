import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUserDetail(@Param('id') id: number): any {
    return this.appService.getUserDetail(Number(id));
  }

  @Post()
  createUser(@Body() body: { name?: string; email: string }){
    return this.appService.createUser(body);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: { name?: string, email: string }){
    return this.appService.updateUser(Number(id), body)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.appService.deleteUser(Number(id))
  }

}
