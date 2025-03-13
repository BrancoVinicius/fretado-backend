import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateDriverDto extends PartialType(CreateUserDto){
    @IsNotEmpty()
    @IsString()
    habilitacao: string;

    @IsOptional()
    @IsString()
    fotoB64: string;

    @IsOptional()
    @IsString()
    itinerario: string;

    @IsString()
    telefone: string;
}
