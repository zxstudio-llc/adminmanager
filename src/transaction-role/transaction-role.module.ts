import { Module } from '@nestjs/common';
import { TransactionRoleService } from './transaction-role.service';
import { TransactionRoleController } from './transaction-role.controller';

@Module({
  controllers: [TransactionRoleController],
  providers: [TransactionRoleService],
})
export class TransactionRoleModule {}
