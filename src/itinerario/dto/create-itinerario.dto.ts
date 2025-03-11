import { IsNotEmpty, IsString } from "class-validator";

export class CreateItinerarioDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    inicio: string;

    @IsString()
    final: string;
}