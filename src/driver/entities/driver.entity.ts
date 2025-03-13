import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Driver {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsEmail()
    itinerario: string;

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
