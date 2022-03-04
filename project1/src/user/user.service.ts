import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model , Schema} from 'mongoose'
import { TestCategory, TestCategorySchema } from "./testCategory.schema";
import { User, UserSchema } from "./user.schema";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private UserModel: Model<typeof UserSchema>,
    @InjectModel(TestCategory.name) private TestCategoryModel : Model<typeof TestCategorySchema>){}

    async login(email:string , pwd : any) {
        const user = await this.UserModel.findOne({email : email , pwd : pwd}).exec()
        if(!user){
             throw new NotFoundException('Not Authenticated')
        }
        return user;

    }

    async testCategory(){
        const tests = await this.TestCategoryModel.find().exec();
        if(!tests){
            throw new NotFoundException('Tests are not Available')
        }
        return tests;
    }
    
}