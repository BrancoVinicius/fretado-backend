import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Student {
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
    universidade: string;
    
    @IsNotEmpty()
    @IsString()
    turno: string;

    @IsString()
    fotoB64: string;
}
