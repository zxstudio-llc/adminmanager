import { Injectable } from '@nestjs/common';
import { CreateTransactionRoleDto } from './dto/create-transaction-role.dto';
import { UpdateTransactionRoleDto } from './dto/update-transaction-role.dto';

@Injectable()
export class TransactionRoleService {
  create(createTransactionRoleDto: CreateTransactionRoleDto) {
    return 'This action adds a new transactionRole';
  }

  findAll() {
    return `This action returns all transactionRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionRole`;
  }

  update(id: number, updateTransactionRoleDto: UpdateTransactionRoleDto) {
    return `This action updates a #${id} transactionRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionRole`;
  }
}
