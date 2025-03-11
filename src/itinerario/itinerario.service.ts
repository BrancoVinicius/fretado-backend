import { Injectable } from '@nestjs/common';
import { CreateItinerarioDto } from './dto/create-itinerario.dto';
import { UpdateItinerarioDto } from './dto/update-itinerario.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class ItinerarioService {
  async create(dto: CreateItinerarioDto) {

    const nomeVerify = await this.findItinerarioByNome(dto.nome);

    if (nomeVerify != null) {
      error("Este nome já está vinculado a um(a) itinerario!");
    } else {
      const itinerario = await prisma.itinerario.create({
        data: {
          nome: dto.nome,
          inicio: dto.inicio,
          final: dto.final,
        }
      });

      return `ID:${itinerario.id}\nItinerario Cadastrado Com Sucesso!`;
    }
  }

  async findAll() {
    const Itinerarios = await prisma.itinerario.findMany();
    return Itinerarios
  }

  async findItinerarioById(id: number) {
    const Itinerario = await prisma.itinerario.findUnique({ where: { id: id } });
    return Itinerario;
  }

  async findAlunoByItinerario(id: number) {
    const itinerario = await this.findItinerarioById(id);

    if (!itinerario) { throw new Error('Itinerário não encontrado!'); }

    const alunos = await prisma.student.findMany({
      where: { itinerario: itinerario.nome, },
    });

    return alunos;
  }

  async findItinerarioByNome(nome: string) {
    const Itinerario = await prisma.itinerario.findUnique({ where: { nome: nome } });
    return Itinerario;
  }

  async update(id: number, dto: UpdateItinerarioDto) {
    const itinerario = await prisma.itinerario.update({
      where: { id: id },
      data: {
        nome: dto.nome,
        inicio: dto.inicio,
        final: dto.final
      }
    });

    return itinerario;
  }

  async remove(id: number) {
    const itinerario = await prisma.itinerario.delete({ where: { id: id } });

    const removedItinerario = prisma.itinerario.findUnique({ where: { id: id } })

    if (removedItinerario != null) {
      error('Itinerario Ainda Existente!')
    } else {
      return `Itinerario Removido:\n${itinerario}`;
    }
  }
}
