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
                    cep_inicio: dto.cep_inicio,
                    cidade_inicio: dto.cidade_inicio,
                    bairro_inicio: dto.bairro_inicio,
                    rua_inicio: dto.rua_inicio,
                    numero_inicio: dto.numero_inicio,
                    final: dto.final,
                    cep_final: dto.cep_final,
                    cidade_final: dto.cidade_final,
                    bairro_final: dto.bairro_final,
                    rua_final: dto.rua_final,
                    numero_final: dto.numero_final,
                    van: dto.van ?? null,
                    motorista: dto.motorista ?? null
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
            where: { itinerario: itinerario.id, },
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
                ...dto
            }
        })

        if (dto.motorista) {
            await prisma.driver.update({
                where: { id: dto.motorista },
                data: { itinerario: id }
            });
        }

        if (dto.van) {
            await prisma.van.update({
                where: { id: dto.van },
                data: { itinerario: id }
            });
        }

        return itinerario;
    }

    async remove(id: number) {

        const itinerario = await prisma.itinerario.findUnique({ where: { id: id } });

        if (!itinerario) {
            throw new Error('Itinerario não encontrado!');
        }

        if (itinerario.van) {
            await prisma.van.update({
                where: { id: itinerario.van },
                data: { itinerario: null },
            });
        }

        if (itinerario.motorista) {
            await prisma.driver.update({
                where: { id: itinerario.motorista },
                data: { itinerario: null },
            });
        }

        await prisma.itinerario.delete({ where: { id: id } });

        const removedItinerario = prisma.itinerario.findUnique({ where: { id: id } })

        if (removedItinerario != null) {
            error('Itinerario Ainda Existente!')
        } else {
            return `Itinerario Removido:\n${itinerario}`;
        }
    }
}
