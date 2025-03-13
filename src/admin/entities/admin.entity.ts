import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Admin {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;

    @IsOptional()
    @IsString()
    fotoB64: string;
}
