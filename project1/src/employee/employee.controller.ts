import {Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ServiceService } from 'src/services/service.service';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService : EmployeeService , private serviceService : ServiceService){}

    @Post()
    addEmp(@Body() body : EmployeeDto){
        this.serviceService.addEmp()
        console.log(body);
    }

    @Get()
    listEmp(){
        this.serviceService.listEmp()
        return this.employeeService.listEmp()
    }

    @Patch()
    updateEmp(){
        this.serviceService.updateEmp()
        return this.employeeService.updateEmp()
    }

    @Delete()
    deleteEmp(){
        this.serviceService.deleteEmp()
        return this.employeeService.deleteEmp()
    }

}
