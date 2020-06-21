import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerEntity } from './customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  public create(@Body() createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  public findAll(): Promise<CustomerEntity[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<CustomerEntity | undefined> {
    return this.customersService.findOne(id);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<void> {
    return this.customersService.remove(id);
  }
}
