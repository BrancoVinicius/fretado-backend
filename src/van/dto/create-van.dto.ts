import { IsNotEmpty, IsString } from "class-validator";

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

    @IsNotEmpty()
    @IsString()
    itinerario: string;

    @IsNotEmpty()
    @IsString()
    ano: string;

    @IsNotEmpty()
    @IsString()
    cor: string;
}