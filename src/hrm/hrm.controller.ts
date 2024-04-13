import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HrmService } from './hrm.service';
import { CreateHrmDto } from './dto/create-hrm.dto';
import { UpdateHrmDto } from './dto/update-hrm.dto';

@Controller('hrm')
export class HrmController {
  constructor(private readonly hrmService: HrmService) {}

  @Post()
  create(@Body() createHrmDto: CreateHrmDto) {
    return this.hrmService.create(createHrmDto);
  }

  @Get()
  findAll() {
    return this.hrmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hrmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHrmDto: UpdateHrmDto) {
    return this.hrmService.update(+id, updateHrmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hrmService.remove(+id);
  }
}
