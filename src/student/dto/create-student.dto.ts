import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateStudentDto extends PartialType(CreateUserDto) {
    @IsString()
    cpf: string;

    @IsString()
    faculdade: string;

    @IsString()
    bairro: string;

    @IsString()
    rua: string;

    @IsString()
    cep: string;

    @IsString()
    numero: string;

    @IsString()
    telefone: string;

    @IsOptional()
    @IsNumber()
    itinerario: number;

    @IsOptional()
    @IsString()
    fotoB64: string;

    @IsBoolean()
    @IsOptional()
    presenca: boolean;

    @IsNumber()
    @IsOptional()
    ordem: number;
}
