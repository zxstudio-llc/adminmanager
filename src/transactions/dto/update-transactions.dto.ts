import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transactions.dto';

export class UpdateTransactionsDto extends PartialType(CreateTransactionDto) {}
