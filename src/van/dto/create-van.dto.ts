import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVanDto {
    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsString()
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

    @IsNotEmpty()
    @IsString()
    cor: string;
}