import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Driver {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;

    @IsNotEmpty()
    @IsString()
    habilitacao: string;

    @IsString()
    fotoB64: string;
}
