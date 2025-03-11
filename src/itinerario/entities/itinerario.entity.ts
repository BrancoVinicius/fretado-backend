import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Itinerario {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    inicio: string;

    @IsNotEmpty()
    @IsString()
    final: string;
}