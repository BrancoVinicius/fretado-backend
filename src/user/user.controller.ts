import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AdminService } from 'src/admin/admin.service';
import { StudentService } from 'src/student/student.service';
import { DriverService } from 'src/driver/driver.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from "bcrypt";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly adminService: AdminService,
    private readonly studentService: StudentService,
    private readonly driverService: DriverService
  ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/login')
  async login(@Body() user) {
    const admin = await this.adminService.findAdminByEmail(user.email);
    if (admin != null) {
      //const result = await bcrypt.compare(user.senha, admin.senha);
      if (user.senha == admin.senha) { return {data: admin, cargo: "admin"}}
    }
    const student = await this.studentService.findStudentByEmail(user.email);
    if (student != null) {
      //const result = await bcrypt.compare(user.senha, student.senha);
      if (user.senha == student.senha) { 
        const { fotoB64, ...studentSemFoto } = student;
        return { data: studentSemFoto, cargo: "aluno" };
      }
    }
    const driver = await this.driverService.findDriverByEmail(user.email);
    if (driver != null) {
      //const result = await bcrypt.compare(user.senha, driver.senha);
      if (user.senha == driver.senha) { return {data: driver, cargo: "motorista"} }
    } else {
      console.error('Não foi possível efetuar login!\nEmail e/ou senha inválido(s)');
    }
  }
}