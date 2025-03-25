import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateItinerarioDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    inicio: string;

    @IsString()
    cep_inicio: string;

    @IsString()
    cidade_inicio: string;

    @IsString()
    bairro_inicio: string;

    @IsString()
    rua_inicio: string;

    @IsString()
    numero_inicio: string;

    @IsString()
    final: string;

    @IsString()
    cep_final: string;

    @IsString()
    cidade_final: string;

    @IsString()
    bairro_final: string;

    @IsString()
    rua_final: string;

    @IsString()
    numero_final: string;

    @IsOptional()
    @IsNumber()
    motorista: number;

    @IsOptional()
    @IsNumber()
    van: number;
}