import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transactions.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}
  async create(createPermissionDto: CreateTransactionDto) {
    const permission = this.transactionRepository.create(createPermissionDto);
    return await this.transactionRepository.save(permission);
  }

  async findAll() {
    return await this.transactionRepository.find();
  }

  async findOneById(id: number) {
    return await this.transactionRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.transactionRepository.softDelete(id);
  }
}
