import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';
import { CreateItinerarioDto } from './dto/create-itinerario.dto';
import { UpdateItinerarioDto } from './dto/update-itinerario.dto';

@Controller('itinerario')
export class ItinerarioController {
  constructor(private readonly itinerarioService: ItinerarioService) { }

  @Post()
  create(@Body() createItinerarioDto: CreateItinerarioDto) {
    return this.itinerarioService.create(createItinerarioDto);
  }

  @Get()
  findAll() {
    return this.itinerarioService.findAll();
  }

  @Get(':id')
  findDriverById(@Param('id') id: string) {
    return this.itinerarioService.findItinerarioById(+id);
  }

  @Get('/aluno/:id')
  findAlunoByItinerario(@Param('id') id: string) {
    return this.itinerarioService.findAlunoByItinerario(+id);
  }

  @Get(':nome')
  findDriverByEmail(@Param('nome') nome: string) {
    return this.itinerarioService.findItinerarioByNome(nome);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItinerarioDto: UpdateItinerarioDto) {
    return this.itinerarioService.update(+id, updateItinerarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itinerarioService.remove(+id);
  }
}
