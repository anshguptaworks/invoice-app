import { Set, Variant } from '../types/typography.types'
import { Body1, Body2, H1, H2, H3, H4, small } from './fontVarient'

export const variantMappingToType: Record<Variant, Set> = {
  Body1,
  Body2,
  H1,
  H2,
  H3,
  H4,
  small
}
