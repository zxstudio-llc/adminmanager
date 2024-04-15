import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  [x: string]: any;
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(role);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOneById(id: number) {
    return await this.roleRepository.findOneBy({ id });
  }

  async update(id: number, UpdateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(id, UpdateRoleDto);
  }

  async remove(id: number) {
    return await this.roleRepository.softDelete(id);
  }
}
