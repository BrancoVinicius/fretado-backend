import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateItinerarioDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    inicio: string;

    @IsString()
    final: string;

    @IsOptional()
    @IsNumber()
    motorista: number;

    @IsOptional()
    @IsNumber()
    van: number;
}