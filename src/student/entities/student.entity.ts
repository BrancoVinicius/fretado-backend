import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
    telefone: string;
    
    @IsNotEmpty()
    @IsString()
    turno: string;

    @IsNotEmpty()
    @IsString()
    itinerario: string;

    @IsOptional()
    @IsString()
    fotoB64: string;
}
