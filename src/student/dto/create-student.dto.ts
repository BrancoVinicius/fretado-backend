import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateStudentDto extends PartialType(CreateUserDto){
    @IsNotEmpty()
    @IsString()
    universidade: string;
    
    @IsNotEmpty()
    @IsString()
    turno: string;

    @IsString()
    fotoB64: string;
}
