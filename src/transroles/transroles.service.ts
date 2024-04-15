import { Injectable } from '@nestjs/common';
import { CreateTransroleDto } from './dto/create-transrole.dto';
import { UpdateTransroleDto } from './dto/update-transrole.dto';

@Injectable()
export class TransrolesService {
  create(createTransroleDto: CreateTransroleDto) {
    return 'This action adds a new transrole';
  }

  findAll() {
    return `This action returns all transroles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transrole`;
  }

  update(id: number, updateTransroleDto: UpdateTransroleDto) {
    return `This action updates a #${id} transrole`;
  }

  remove(id: number) {
    return `This action removes a #${id} transrole`;
  }
}
