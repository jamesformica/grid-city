import React from 'react'
import range from 'lodash/range'

import Tile from './Tile'
import styles from './Grid.css'

const GRID_SIZE = 8

const gridStyles = {
  gridTemplateColumns: range(GRID_SIZE).reduce(agg => `${agg} 1fr`, ''),
  gridTemplateRows: range(GRID_SIZE).reduce(agg => `${agg} 1fr`, ''),
}

const Grid = props => (
  <div className={styles.grid} style={gridStyles}>
    {range(GRID_SIZE * GRID_SIZE).map(i => <Tile key={i} {...props} />)}
  </div>
)

export default Grid
