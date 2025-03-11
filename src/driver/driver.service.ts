import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class DriverService {
  async create(dto: CreateDriverDto) {

    const emailVerify = await this.findDriverByEmail(dto.email);

    if (emailVerify != null) {
      error("Este e-mail já está vinculado a um(a) motorista!");
    } else {
      const driver = await prisma.driver.create({
        data: {
          nome: dto.nome,
          email: dto.email,
          senha: "123",
          habilitacao: dto.habilitacao,
          fotoB64: "123"
        }
      });

      return `ID:${driver.id}\nMotorista Cadastrado Com Sucesso!`;
    }
  }

  async findAll() {
    const Drivers = await prisma.driver.findMany();
    return Drivers
  }

  async findDriverById(id: number) {
    const Driver = await prisma.driver.findUnique({ where: { id: id } });
    return Driver;
  }

  async findDriverByEmail(email: string) {
    const Driver = await prisma.driver.findUnique({ where: { email: email } });
    return Driver;
  }

  async updateDriverPhoto(photo: string, id: number) {
    const driver = await prisma.driver.update({ where: { id: id }, data: { fotoB64: photo } });

    return `Foto do(a) motorista ${driver.nome} atualizada com sucesso!`
  }

  async update(id: number, dto: UpdateDriverDto) {
    const driver = await prisma.driver.update({
      where: { id: id },
      data: {
        ...dto
      }
    });

    return driver;
  }

  async remove(id: number) {
    const driver = await prisma.driver.delete({ where: { id: id } });

    const removedDriver = prisma.driver.findUnique({ where: { id: id } })

    if (removedDriver != null) {
      error('Motorista Ainda Existente!')
    } else {
      return `Motorista Removido:\n${driver}`;
    }
  }
}
