import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customersRepository: Repository<CustomerEntity>
  ) {}

  public create(createCustomerEntityDto: CreateCustomerDto): Promise<CustomerEntity> {
    const user = new CustomerEntity();

    user.firstName = createCustomerEntityDto.firstName;
    user.lastName = createCustomerEntityDto.lastName;

    return this.customersRepository.save(user);
  }

  public async findAll(): Promise<CustomerEntity[]> {
    return this.customersRepository.find();
  }

  public findOne(id: string): Promise<CustomerEntity | undefined> {
    return this.customersRepository.findOne(id);
  }

  public async remove(id: string): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
