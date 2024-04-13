import { Injectable } from '@nestjs/common';
import { CreateHrmDto } from './dto/create-hrm.dto';
import { UpdateHrmDto } from './dto/update-hrm.dto';

@Injectable()
export class HrmService {
  create(createHrmDto: CreateHrmDto) {
    return 'This action adds a new hrm';
  }

  findAll() {
    return `This action returns all hrm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hrm`;
  }

  update(id: number, updateHrmDto: UpdateHrmDto) {
    return `This action updates a #${id} hrm`;
  }

  remove(id: number) {
    return `This action removes a #${id} hrm`;
  }
}
