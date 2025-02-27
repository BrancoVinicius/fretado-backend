import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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

    @IsString()
    fotoB64: string;
}
