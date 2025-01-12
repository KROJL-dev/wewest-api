import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PlaceModule } from './place/place.module'
import { MapModule } from './map/map.module'

@Module({
  imports: [MapModule, PlaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
