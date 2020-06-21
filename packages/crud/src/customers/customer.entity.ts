import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '@ts-starter/types';

@Entity()
export class CustomerEntity implements Customer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;
}
