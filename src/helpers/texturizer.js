import sample from 'lodash/sample'

import { GRID_DIMENSION, GRID_SIZE, PIXEL_SIZE } from '../constants'


const GRASS_COLOURS = ['#94D583', '#A4E179', '#CBF591', '#E1F5C4']
const WATER_COLOURS = ['#1693A5', '#45B5C4', '#7ECECA', '#A0DED6', '#C7EDE8']
const SAND_COLOURS = ['#FBEEC2', '#FAFCD3', '#F5F0D7', '#F7E7AC', '#FFF6DB']

const texturize = (colours) => {
  const numPixels = GRID_DIMENSION / GRID_SIZE

  let shadow = ''

  for (let i = 0; i < numPixels; i += PIXEL_SIZE) {
    for (let j = 0; j < numPixels; j += PIXEL_SIZE) {
      shadow += `, ${j}px ${i}px 0px ${sample(colours)}`
    }
  }

  shadow = shadow.slice(1)

  return {
    width: `${PIXEL_SIZE}px`,
    height: `${PIXEL_SIZE}px`,
    background: sample(colours),
    boxShadow: shadow,
  }
}

export const textureGrass = () => texturize(GRASS_COLOURS)
export const textureWater = () => texturize(WATER_COLOURS)
export const textureSand = () => texturize(SAND_COLOURS)
