import { Injectable } from "@nestjs/common";

@Injectable()
export class ServiceService{
    addEmp(){
        console.log("emp added")
        return 
    }

    updateEmp(){
        console.log("emp updated");
        return
        
    }

    deleteEmp(){
        console.log("Emp deleted");
        return
    }

    listEmp(){
        console.log("emp list");
        return
    }

    salary(){
        console.log("earned salary");
        return
    }
}