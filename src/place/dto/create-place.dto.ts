import type { TCoordinate } from 'types'

export class CreatePlaceDto {
  id: string
  coordinate: TCoordinate
  title: string
  description?: string
}
