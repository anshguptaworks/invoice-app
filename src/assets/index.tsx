import React, { ReactElement, FunctionComponent } from 'react'

import { IconsType } from './types'
import Logo from './icons/logo'
import Dark from './icons/dark'
import Light from './icons/light'
import Background from './icons/background'
import Curved from './icons/curved'
import Plus from './icons/plus'
import Arrow from './icons/arrow'
import Add from './icons/add'
import Delete from './icons/delete'
import NotFound from './icons/notFound'
import Home from './icons/home'

const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.logo, Logo],
  [IconsType.dark, Dark],
  [IconsType.light, Light],
  [IconsType.logo, Logo],
  [IconsType.background, Background],
  [IconsType.curved, Curved],
  [IconsType.plus, Plus],
  [IconsType.arrow, Arrow],
  [IconsType.add, Add],
  [IconsType.delete, Delete],
  [IconsType.notFound, NotFound],
  [IconsType.home, Home]
])

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> | null => {
  const IconComponent = iconsMap.get(icons)
  if (IconComponent) {
    return <IconComponent {...iconsProp} />
  } else {
    console.error('Icon not found')
    return null
  }
}

export interface IconProps {
  className?: string
  pathClassName?: string
}
