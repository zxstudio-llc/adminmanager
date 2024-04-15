import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionRoleDto } from './create-transaction-role.dto';

export class UpdateTransactionRoleDto extends PartialType(CreateTransactionRoleDto) {}
