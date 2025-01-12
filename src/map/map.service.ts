import { Injectable } from '@nestjs/common'

export interface Marker {
  id: string
  title: string
  latitude: number
  longitude: number
  description?: string
}

@Injectable()
export class MapService {
  private markers: Marker[] = [
    {
      id: '1',
      latitude: 0,
      longitude: 0,
      description: 'test',
      title: '',
    },
  ]

  createMarker(
    id: string,
    latitude: number,
    title: string,
    longitude: number,
    description?: string
  ): Marker {
    const newMarker: Marker = { id, latitude, longitude, description, title }
    this.markers.push(newMarker)
    return newMarker
  }
  addMarker(marker: Marker): Marker {
    this.markers.push(marker)
    return marker
  }

  getMarkers(): Marker[] {
    return this.markers
  }

  getMarkerById(id: string): Marker | undefined {
    return this.markers.find(marker => marker.id === id)
  }

  updateMarker(id: string, updatedMarker: Partial<Marker>): Marker | undefined {
    const markerIndex = this.markers.findIndex(marker => marker.id === id)
    if (markerIndex === -1) {
      return undefined
    }
    this.markers[markerIndex] = {
      ...this.markers[markerIndex],
      ...updatedMarker,
    }
    return this.markers[markerIndex]
  }

  deleteMarker(id: string): boolean {
    const markerIndex = this.markers.findIndex(marker => marker.id === id)
    if (markerIndex === -1) {
      return false
    }
    this.markers.splice(markerIndex, 1)
    return true
  }
  findAll(): Marker[] {
    return this.markers
  }
  findOne(id: string): Marker | undefined {
    return this.markers.find(marker => marker.id === id)
  }
}
