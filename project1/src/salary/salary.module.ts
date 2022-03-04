import { Module } from '@nestjs/common';
import { ServiceService } from 'src/services/service.service';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService  , ServiceService]
})
export class SalaryModule {}
