import { IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  age?: number;
}
