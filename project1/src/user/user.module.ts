import { Controller, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestCategorySchema } from "./testCategory.schema";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.schema";
import { UserService } from "./user.service";

@Module({
    imports : [MongooseModule.forFeature([{name : 'User' , schema : UserSchema}]) , MongooseModule.forFeature([{name : 'TestCategory' , schema : TestCategorySchema}])],
    controllers: [ UserController],
    providers: [UserService]
})
export class UserModule{}