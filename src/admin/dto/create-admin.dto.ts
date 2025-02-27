import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateAdminDto extends PartialType(CreateUserDto){
    @IsString()
    fotoB64: string;
}
