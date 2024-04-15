import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransrolesService } from './transroles.service';
import { CreateTransroleDto } from './dto/create-transrole.dto';
import { UpdateTransroleDto } from './dto/update-transrole.dto';

@Controller('transroles')
export class TransrolesController {
  constructor(private readonly transrolesService: TransrolesService) {}

  @Post()
  create(@Body() createTransroleDto: CreateTransroleDto) {
    return this.transrolesService.create(createTransroleDto);
  }

  @Get()
  findAll() {
    return this.transrolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transrolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransroleDto: UpdateTransroleDto) {
    return this.transrolesService.update(+id, updateTransroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transrolesService.remove(+id);
  }
}
