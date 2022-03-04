import { Injectable } from "@nestjs/common";

@Injectable({
    
})
export class StudentService{

    addStudent(){
        return 'new Student added'
    }
    
    updateStudent(){
        return "Student Updated"
    }
    
    deleteStudent(){
        return "student Deleted"
    }

    studentList(){
        return ["rajkumar" , "het kumar" , "vaibhav kumar"];
    }
}