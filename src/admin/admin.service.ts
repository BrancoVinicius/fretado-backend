import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class AdminService {
  async create(dto: CreateAdminDto) {
    const emailVerify = await this.findAdminByEmail(dto.email);
    
    if (emailVerify != null) {
      error("Este e-mail já está vinculado a um(a) administrador!");
    } else {
      const admin = await prisma.admin.create({
        data: {
          nome: dto.nome,
          email: dto.email,
          senha: dto.senha,
          fotoB64: dto.fotoB64 ?? null
        }
      });

      return `ID:${admin.id}\nAdministrador Cadastrado Com Sucesso!`;
    }
  }

  async findAll() {
    const admin = await prisma.admin.findMany();
    return admin
  }

  async findAdminById(id: number) {
    const admin = await prisma.admin.findUnique({ where: { id: id } });
    return admin;
  }

  async findAdminByEmail(email: string) {
    const admin = await prisma.admin.findUnique({ where: { email: email } });
    return admin;
  }

  async updateAdminPhoto(photo: string, id: number) {
    const admin = await prisma.admin.update({ where: { id: id }, data: { fotoB64: photo } });

    return `Foto do(a) administrador(a) ${admin.nome} atualizada com sucesso!`
  }

  async update(id: number, dto: UpdateAdminDto) {
    const admin = await prisma.admin.update({
      where: { id: id },
      data: {
        nome: dto.nome,
        email: dto.email,
        senha: dto.senha,
        fotoB64: dto.fotoB64
      }
    });

    return admin;
  }

  async remove(id: number) {
    const admin = await prisma.admin.delete({ where: { id: id } });

    const removedAdmin = prisma.admin.findUnique({ where: { id: id } })

    if (removedAdmin != null) {
      error('Motorista Ainda Existente!')
    } else {
      return `Motorista Removido:\n${admin}`;
    }
  }
}