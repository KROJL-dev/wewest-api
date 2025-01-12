import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common'
import { MapService } from './map.service'
import type { Marker } from './map.service'
import type { CreateMarkerDto } from './dto/create-marker.dto'

@Controller('map')
export class MapController {
  constructor(@Inject(MapService) private readonly mapService: MapService) {}

  @Get('/')
  findAll() {
    return this.mapService.findAll()
  }

  @Get(':id')
  findOne(id: string): Marker {
    return this.mapService.findOne(id)
  }

  @Post('marker')
  createMarker(createMarkerDto: CreateMarkerDto) {
    const { id, latitude, longitude, description, title } = createMarkerDto
    return this.mapService.createMarker(id, latitude, title, longitude, description)
  }
}
