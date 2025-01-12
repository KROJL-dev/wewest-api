import { Injectable } from '@nestjs/common'

import type { TCoordinate } from 'types'

export interface IPlace {
  id: string
  title: string
  coordinate: TCoordinate
  description?: string
}

@Injectable()
export class PlaceService {
  private places: IPlace[] = [
    {
      id: '1',
      coordinate: { latitude: 0, longitude: 0 },
      description: 'test',
      title: '',
    },
  ]

  createPlace(id: string, coordinate: TCoordinate, title: string, description?: string): IPlace {
    const newPlace: IPlace = { id, coordinate, description, title }
    this.places.push(newPlace)
    return newPlace
  }

  addMarker(place: IPlace): IPlace {
    this.places.push(place)
    return place
  }

  getMarkers(): IPlace[] {
    return this.places
  }

  getMarkerById(id: string): IPlace | undefined {
    return this.places.find(place => place.id === id)
  }

  updateMarker(id: string, updatedMarker: Partial<IPlace>): IPlace | undefined {
    const markerIndex = this.places.findIndex(marker => marker.id === id)

    if (markerIndex === -1) {
      return undefined
    }

    this.places[markerIndex] = {
      ...this.places[markerIndex],
      ...updatedMarker,
    }
    return this.places[markerIndex]
  }

  deleteMarker(id: string): boolean {
    const placeIndex = this.places.findIndex(place => place.id === id)
    if (placeIndex === -1) {
      return false
    }
    this.places.splice(placeIndex, 1)
    return true
  }

  findAll(): IPlace[] {
    return this.places
  }

  findOne(id: string): IPlace | undefined {
    return this.places.find(marker => marker.id === id)
  }
}
