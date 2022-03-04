import { Injectable } from '@nestjs/common';
import { SalaryDto } from './dto/salary.dto';

@Injectable()
export class SalaryService {
    calculateSalary(){
           
           return "calculating salary"
    }
}
