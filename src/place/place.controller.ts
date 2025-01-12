import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common'
import { PlaceService } from './place.service'
import type { IPlace } from './place.service'
import type { CreatePlaceDto } from './dto/create-place.dto'

@Controller('place')
export class PlaceController {
  constructor(@Inject(PlaceService) private readonly placeService: PlaceService) {}

  @Get('/')
  findAll() {
    return this.placeService.findAll()
  }

  @Get(':id')
  findOne(id: string): IPlace {
    return this.placeService.findOne(id)
  }

  @Post('/')
  createMarker(createPlaceDto: CreatePlaceDto) {
    const { id, coordinate, description, title } = createPlaceDto
    return this.placeService.createPlace(id, coordinate, title, description)
  }
}
