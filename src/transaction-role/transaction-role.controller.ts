import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionRoleService } from './transaction-role.service';
import { CreateTransactionRoleDto } from './dto/create-transaction-role.dto';
import { UpdateTransactionRoleDto } from './dto/update-transaction-role.dto';

@Controller('transaction-role')
export class TransactionRoleController {
  constructor(private readonly transactionRoleService: TransactionRoleService) {}

  @Post()
  create(@Body() createTransactionRoleDto: CreateTransactionRoleDto) {
    return this.transactionRoleService.create(createTransactionRoleDto);
  }

  @Get()
  findAll() {
    return this.transactionRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionRoleDto: UpdateTransactionRoleDto) {
    return this.transactionRoleService.update(+id, updateTransactionRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionRoleService.remove(+id);
  }
}
