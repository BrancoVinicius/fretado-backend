import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Driver {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    itinerario: number;

    @IsNotEmpty()
    @IsString()
    senha: string;

    @IsNotEmpty()
    @IsString()
    telefone: string;

    @IsNotEmpty()
    @IsString()
    habilitacao: string;

    @IsOptional()
    @IsString()
    fotoB64: string;
}
