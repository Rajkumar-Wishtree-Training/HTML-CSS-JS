import { Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {

    listEmp() : EmployeeDto{
        return {
                name : 'het kumar' , 
                designation : 'Student',
                salary :500
               }
    }

    updateEmp(){
        return "employee Updated"
    }

    deleteEmp(){
        return "employee Deleted"
    }
}
