import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VanService } from './van.service';
import { CreateVanDto } from './dto/create-van.dto';
import { UpdateVanDto } from './dto/update-van.dto';

@Controller('van')
export class VanController {
  constructor(private readonly vanService: VanService) {}

  @Post()
  create(@Body() createVanDto: CreateVanDto) {
    return this.vanService.create(createVanDto);
  }

  @Get()
  findAll() {
    return this.vanService.findAll();
  }

  @Get(':id')
  findDriverById(@Param('id') id: string) {
    return this.vanService.findVanById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVanDto: UpdateVanDto) {
    return this.vanService.update(+id, updateVanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vanService.remove(+id);
  }
}
