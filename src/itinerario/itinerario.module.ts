import { Module } from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';
import { ItinerarioController } from './itinerario.controller';

@Module({
  controllers: [ItinerarioController],
  providers: [ItinerarioService],
  exports: [ItinerarioService]
})
export class ItinerarioModule {}
