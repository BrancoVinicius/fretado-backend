import { Injectable } from '@nestjs/common';
import { CreateVanDto } from './dto/create-van.dto';
import { UpdateVanDto } from './dto/update-van.dto';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient()

@Injectable()
export class VanService {
  async create(dto: CreateVanDto) {
    
    const placaVerify = await this.findVanByPlaca(dto.placa);

    if(placaVerify != null){
      error("Esta placa já está vinculada!");
    }else{
      const van = await prisma.van.create({
        data:{
          placa: dto.placa,
          modelo: dto.modelo,
          cor: dto.cor,
          ano: dto.ano
        }});

        return `ID:${van.id}\nVan Cadastrada Com Sucesso!`;
    }
  }

  async findAll() {
    const Vans = await prisma.van.findMany();
    return Vans
  }

  async findVanById(id: number) {
    const Van = await prisma.van.findUnique({where: {id: id}});
    return Van;
  }

  async findVanByPlaca(placa: string) {
    const Van = await prisma.van.findUnique({where: {placa: placa}});
    return Van;
  }

  async update(id: number, dto: UpdateVanDto) {
    const van = await prisma.van.update({
      where:{id: id},
      data:{
        placa: dto.placa,
        modelo: dto.modelo,
        cor: dto.cor,
        ano: dto.ano
      }});

    return van;
  }

  async remove(id: number) {
    const van = await prisma.van.delete({where:{id: id}});

    const removedVan = prisma.van.findUnique({where:{id: id}})

    if(removedVan != null){
      error('Van Ainda Existente!')
    }else{
      return `Van Removido:\n${van}`;
    }
  }
}
