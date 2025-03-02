import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { StudentModule } from 'src/student/student.module';
import { DriverModule } from 'src/driver/driver.module';
import { VanModule } from 'src/van/driver.module';

@Module({
  imports: [StudentModule, DriverModule, VanModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}