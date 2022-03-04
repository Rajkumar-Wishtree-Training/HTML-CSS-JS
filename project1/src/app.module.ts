import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [StudentModule, EmployeeModule, SalaryModule , UserModule ,MongooseModule.forRoot('mongodb://localhost/demo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
