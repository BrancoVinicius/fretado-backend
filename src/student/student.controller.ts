import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findStudentById(@Param('id') id: string) {
    return this.studentService.findStudentById(+id);
  }

  @Get(':email')
  findStudentByEmail(@Param('email') email: string) {
    return this.studentService.findStudentByEmail(email);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }
    
  @Patch('/updateStudentPhoto:id')
  updateStudentPhoto(@Param('id') photo: string, id: string) {
    return this.studentService.updateStudentPhoto(photo, +id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
