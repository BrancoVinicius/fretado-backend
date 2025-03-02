import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminModule } from 'src/admin/admin.module';
import { StudentModule } from 'src/student/student.module';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [PrismaModule, AdminModule, StudentModule, DriverModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
