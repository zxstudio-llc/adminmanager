import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.UsersRepository.create(createUserDto);
    return await this.UsersRepository.save(user);
  }

  // async findAll() {
  //   return await this.UsersRepository.find();
  // }

  async findOneByEmail(email: string) {
    return await this.UsersRepository.findOneBy({ email });
  }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return await this.UsersRepository.update(id, updateUserDto);
  // }

  // async remove(id: number) {
  //   return await this.UsersRepository.softDelete({ id });
  // }
}
