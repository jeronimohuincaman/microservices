import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name) // Le da el nombre "UserService"

  constructor(private readonly userService: UserService) { }

  @MessagePattern('create_user')
  create(@Payload() createUserDto: CreateUserDto) {
    this.logger.log('controller find create');
    return this.userService.create(createUserDto);
  }

  @MessagePattern('find_all_users')
  findAll(@Payload() PaginationDto: PaginationDto) {
    this.logger.log('controller find all');
    return this.userService.findAll(PaginationDto);
  }

  @MessagePattern('find_one_user')
  findOne(@Payload('id', ParseIntPipe) id: number) {
    this.logger.log('controller find one');
    return this.userService.findOne(+id);
  }

  @MessagePattern('update_user')
  update(
    @Payload() updateUserDto: UpdateUserDto
  ) {
    this.logger.log('controller update');
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('delete_user')
  remove(@Payload('id', ParseIntPipe) id: number) {
    this.logger.log('controller delete', id);
    return this.userService.remove(id);
  }
}
