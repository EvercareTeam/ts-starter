import { Customer } from '@ts-starter/types';
import { IsString, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCustomerDto implements Customer {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  public lastName: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;
}
