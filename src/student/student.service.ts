import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class StudentService {

  async create(dto: CreateStudentDto) {

    const emailVerify = await this.findStudentByEmail(dto.email);

    if (emailVerify != null) {
      error("Este e-mail já está vinculado a um(a) estudante!");
    } else {
      const student = await prisma.student.create({
        data: {
          nome: dto.nome,
          email: dto.email,
          senha: "123",
          cpf: dto.cpf,
          faculdade: dto.faculdade,
          cep: dto.cep,
          bairro: dto.bairro,
          telefone: dto.telefone,
          rua: dto.rua,
          numero: dto.numero,
          itinerario: dto.itinerario || null,
          fotoB64: dto.fotoB64 ?? null,
          presenca: dto.presenca ?? true
        }
      });

      return `ID:${student.id}\nEstudante Cadastrado Com Sucesso!`;
    }
  }

  async findAll() {
    const students = await prisma.student.findMany();
    return students
  }

  async findStudentById(id: number) {
    const student = await prisma.student.findUnique({ where: { id: id } });
    return student;
  }

  async findStudentByEmail(email: string) {
    const student = await prisma.student.findUnique({ where: { email: email } });
    return student;
  }

  async updateStudentPhoto(photo: string, id: number) {
    const student = await prisma.student.update({ where: { id: id }, data: { fotoB64: photo } });

    return `Foto do(a) estudante ${student.nome} atualizada com sucesso!`
  }

  async update(id: number, dto: UpdateStudentDto) {
    const student = await prisma.student.update({
      where: { id: id },
      data: {
        ...dto,
      }
    });

    return student;
  }

  async remove(id: number) {
    const student = await prisma.student.delete({ where: { id: id } })

    const removedStudent = prisma.driver.findUnique({ where: { id: id } })

    if (removedStudent != null) {
      error('Motorista Ainda Existente!')
    } else {
      return `Estudante Removido:\n${student}`;
    }
  }

  async updateAlunoOrder(alunos: { id: number, ordem: number }[]) {
    try {
      for (const aluno of alunos) {
        await prisma.student.update({
          where: { id: aluno.id },
          data: { ordem: aluno.ordem },
        });
      }
      return { message: "Ordem dos alunos atualizada com sucesso!" };
    } catch (error) {
      throw new Error("Erro ao atualizar ordem dos alunos.");
    }
  }
}
