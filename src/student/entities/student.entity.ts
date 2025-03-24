import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
    ordem: boolean;
}
