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
  constructor(private readonly userService: UserService, private readonly adminService: AdminService, private readonly studentService: StudentService, private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/login')
  async login(@Param('email') email: string, senha: string) {
    try {
      const admin = await this.adminService.findAdminByEmail(email);
      if(admin != null){
        const result = await bcrypt.compare(senha, admin.senha);
        if(result){
          return `Administrador ${admin.nome} efetuou login!`
        }else{
          console.error('Email e/ou senha inválido(s)');
        }
      }
      const student = await this.studentService.findStudentByEmail(email);
      if(student != null){
        const result = await bcrypt.compare(senha, student.senha);
        if(result){
          return `Estudante ${student.nome} efetuou login!`
        }else{
          console.error('Email e/ou senha inválido(s)');
        }
      }
      const driver = await this.driverService.findDriverByEmail(email);
      if(driver != null){
        const result = await bcrypt.compare(senha, driver.senha);
        if(result){
          return `Motorista ${driver.nome} efetuou login!`
        }else{
          console.error('Email e/ou senha inválido(s)');
        }
      }
    } catch (error) {
      
    }
  }
}