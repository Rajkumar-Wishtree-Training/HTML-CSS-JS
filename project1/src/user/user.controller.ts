import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    constructor(private UserService : UserService){}

    @Post('login')
    async login(@Body() body : any){
        return await this.UserService.login(body.email , body.pwd)
        
    }

    @Get('testcategory')
    async testcategory(){
        return this.UserService.testCategory()
    }
}