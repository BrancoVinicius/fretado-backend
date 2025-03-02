import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateDriverDto extends PartialType(CreateUserDto){
    @IsNotEmpty()
    @IsString()
    habilitacao: string;

    @IsString()
    fotoB64: string;
}
