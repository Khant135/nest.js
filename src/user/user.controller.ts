import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDtp: CreateUserDto) {
    const user = await this.userService.create(createUserDtp);
    return {
      data: user,
      message: 'User created successfully',
    };
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return {
      data: users,
      message: 'Users fetched successfully',
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);
    return {
      data: user,
      message: 'User Detail fetched successfully',
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(+id, updateUserDto);
    return {
      data: user,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.remove(+id);
    return {
      data: user,
      message: 'User deleted successfully',
    };
  }
}
