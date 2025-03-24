import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Itinerario {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    inicio: string;

    @IsNotEmpty()
    @IsNumber()
    motorista: number;

    @IsNotEmpty()
    @IsNumber()
    van: number;

    @IsNotEmpty()
    @IsString()
    final: string;
}