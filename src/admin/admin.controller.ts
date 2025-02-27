import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { StudentService } from 'src/student/student.service';
import { CreateStudentDto } from 'src/student/dto/create-student.dto';
import { UpdateStudentDto } from 'src/student/dto/update-student.dto';
import { DriverService } from 'src/driver/driver.service';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { UpdateDriverDto } from 'src/driver/dto/update-driver.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly studentService: StudentService,
    private readonly driverService: DriverService) {}

  @Post('/createAdmin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Post('/createStudent')
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Post('/createDriver')
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get('/findAdmin')
  findAllAdmin() {
    return this.adminService.findAll();
  }

  @Get('/findStudent')
  findAllStudents() {
    return this.studentService.findAll();
  }

  @Get('/findDriver')
  findAllDrivers() {
    return this.driverService.findAll();
  }

  @Get('/findAdmin:id')
  findAdminById(@Param('id') id: string) {
    return this.adminService.findAdminById(+id);
  }

  @Get('/findAdmin:email')
  findAdminByEmail(@Param('email') email: string) {
    return this.adminService.findAdminByEmail(email);
  }

  @Get('/findStudent:id')
  findStudentById(@Param('id') id: string) {
    return this.studentService.findStudentById(+id);
  }

  @Get('/findStudent:id')
  findStudentByEmail(@Param('email') email: string) {
    return this.studentService.findStudentByEmail(email);
  }

  @Get('/findDriver:id')
  findDriverById(@Param('id') id: string) {
    return this.driverService.findDriverById(+id);
  }

  @Get('/findDriver:email')
  findDriverByEmail(@Param('email') email: string) {
    return this.driverService.findDriverByEmail(email);
  }

  @Patch('/updateAdmin:id')
  updateAdmin(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Patch('/updateStudent:id')
  updateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Patch('/updateDriver:id')
  updateDriver(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }
    
  @Patch('/updateAdminPhoto:id')
  updateAdminPhoto(@Param('id') photo: string, id: string) {
    return this.adminService.updateAdminPhoto(photo, +id);
  }

  @Delete('/deleteStudent:id')
  removeStudent(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }

  @Delete('/deleteDriver:id')
  removeDriver(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
