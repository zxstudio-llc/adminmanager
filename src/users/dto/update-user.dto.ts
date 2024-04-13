import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  firstName: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  lastName: string;

  @IsString()
  @MinLength(13)
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password: string;
}
