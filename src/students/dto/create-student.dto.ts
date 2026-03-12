import { IsString, IsEmail, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  @Min(1)
  age: number;
}
