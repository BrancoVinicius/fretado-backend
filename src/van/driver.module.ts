import { Module } from '@nestjs/common';
import { VanService } from './van.service';
import { VanController } from './van.controller';

@Module({
  controllers: [VanController],
  providers: [VanService],
  exports: [VanService]
})
export class VanModule {}
