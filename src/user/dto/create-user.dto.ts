import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  nome: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  senha: string;
}
