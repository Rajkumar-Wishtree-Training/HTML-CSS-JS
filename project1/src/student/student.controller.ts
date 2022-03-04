import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('student')
export class StudentController{
    constructor(private StudentService : StudentService){}

    @Post('add')
    addStudent(){
        return this.StudentService.addStudent();
    }

    @Patch('edit')
    updateStudent(){
        return this.StudentService.updateStudent();
    }

    @Delete('delete')
    deleteStudent(){
        return this.StudentService.deleteStudent();
    }

    @Get('list')
    studentList(){
        return this.StudentService.studentList();
    }
}