import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        const data = {
            ...createUserDto,
            senha: await bcrypt.hash(createUserDto.senha, 10)
        }

        const createdUser = await this.prisma.user.create({ data })

        return { ...createdUser, senha: undefined, };
    }

    findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    findOne(email: string, senha: string) {
      const user = this.prisma.admin.findUnique({
        where:{
          email: email,
          senha: senha
        }})
    }
  
    /*
    findAll() {
      return `This action returns all user`;
    }
  
    update(id: number, updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} user`;
    }*/

}
