import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findDriverById(@Param('id') id: string) {
    return this.driverService.findDriverById(+id);
  }

  @Get(':email')
  findDriverByEmail(@Param('email') email: string) {
    return this.driverService.findDriverByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }
  
  @Patch('/updateStudentPhoto:id')
  updateStudentPhoto(@Param('id') photo: string, id: string) {
    return this.driverService.updateDriverPhoto(photo, +id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
