import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TestCategory{
    @Prop()
    name : string

    @Prop()
    questions : string[]
}

export const TestCategorySchema = SchemaFactory.createForClass(TestCategory)