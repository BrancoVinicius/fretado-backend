import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class StudentService {

  async create(dto: CreateStudentDto) {
    
    const emailVerify = this.findStudentByEmail(dto.email);

    if(emailVerify != null){
      error("Este e-mail já está vinculado a um(a) estudante!");
    }else{
      const student = await prisma.student.create({
        data:{
          nome: dto.nome,
          email: dto.email,
          senha: dto.senha,
          universidade: dto.universidade,
          turno: dto.turno,
          fotoB64: dto.fotoB64
        }});

      return `ID:${student.id}\nEstudante Cadastrado Com Sucesso!`;
    }
  }

  async findAll() {
    const students = await prisma.student.findMany();
    return students
  }

  async findStudentById(id: number) {
    const student = await prisma.student.findUnique({where: {id: id}});
    return student;
  }

  async findStudentByEmail(email: string) {
    const student = await prisma.student.findUnique({where: {email: email}});
    return student;
  }

  async updateStudentPhoto(photo: string, id: number) {
    const student = await prisma.student.update({where:{id: id}, data:{fotoB64: photo}});

    return `Foto do(a) estudante ${student.nome} atualizada com sucesso!`
  }

  async update(id: number, dto: UpdateStudentDto) {
    const student = await prisma.student.update({
      where:{id: id},
      data:{
        nome: dto.nome,
        email: dto.email,
        senha: dto.senha,
        universidade: dto.universidade,
        turno: dto.turno,
        fotoB64: dto.fotoB64
      }});

    return student;
  }

  async remove(id: number) {
    const student = await prisma.student.delete({where:{id: id}})

    const removedStudent = prisma.driver.findUnique({where:{id: id}})

    if(removedStudent != null){
      error('Motorista Ainda Existente!')
    }else{
      return `Estudante Removido:\n${student}`;
    }
  }
}
