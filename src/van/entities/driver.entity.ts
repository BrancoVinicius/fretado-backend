import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Driver {
    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsEmail()
    placa: string;

    @IsNotEmpty()
    @IsString()
    ano: string;

    @IsString()
    cor: string;
}