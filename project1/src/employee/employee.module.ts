import { Module } from '@nestjs/common';
import { ServiceService } from 'src/services/service.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService  , ServiceService]
})
export class EmployeeModule {}
