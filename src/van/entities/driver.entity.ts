import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Driver {
    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsEmail()
    placa: string;

    @IsNotEmpty()
    @IsString()
    capacidade: string;

    @IsOptional()
    @IsNumber()
    itinerario: number;

    @IsNotEmpty()
    @IsString()
    ano: string;

    @IsString()
    cor: string;
}