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
    habilitacaoFb64: string;

    @IsNotEmpty()
    @IsString()
    habilitacaoVb64: string;

    @IsNotEmpty()
    @IsString()
    turno: string;

    @IsString()
    fotoB64: string;
}
