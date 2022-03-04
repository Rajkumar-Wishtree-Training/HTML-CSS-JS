import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop()
    email : string

    @Prop()
    pwd : string
}

export const UserSchema = SchemaFactory.createForClass(User)