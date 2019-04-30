export const GRID_DIMENSION = 600
export const GRID_SIZE = 8

export const PIXEL_SIZE = 3

export const MODES = [
  { text: 'Rotate ↷', value: 'rotate' },
  { text: 'Grass', value: 'grass' },
  { text: 'Water', value: 'water' },
  { text: 'Sand', value: 'sand' },
  { text: 'Road (straight)', value: 'road-straight' },
  { text: 'Road (corner)', value: 'road-corner' },
  { text: 'House', value: 'house' },
]

export const MODE = MODES.reduce((agg, curr) => (
  { ...agg, [curr.value]: curr }
), {})
