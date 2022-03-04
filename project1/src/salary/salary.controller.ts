import { Controller, Get } from '@nestjs/common';
import { ServiceService } from 'src/services/service.service';
import { SalaryService } from './salary.service';

@Controller('salary')
export class SalaryController {

    constructor(private salaryService : SalaryService , private ServiceService : ServiceService){}

    @Get()
    calculateSalary(){
        this.ServiceService.salary()
        return this.salaryService.calculateSalary()
    }
}
