import { PartialType } from '@nestjs/mapped-types';
import { CreateTransroleDto } from './create-transrole.dto';

export class UpdateTransroleDto extends PartialType(CreateTransroleDto) {}
