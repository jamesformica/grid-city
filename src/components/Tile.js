import React, { useState } from 'react'

import { MODE } from '../constants'
import { textureGrass, textureWater, textureSand } from '../helpers/texturizer'
import styles from './Tile.css'

const Tile = ({ mode, rotation, setRotation }) => {
  const [state, setState] = useState({ mode: 'blank', rotation, tileStyles: {} })

  const tileClicked = (e) => {
    const oldState = { ...state }

    if (e.shiftKey || mode === MODE.rotate.value) {
      const newRotation = (oldState.rotation + 90) % 360
      setState({ ...oldState, rotation: newRotation })
      setRotation(newRotation)
      return
    }

    let tileStyles = {}
    if (mode === MODE.grass.value) tileStyles = textureGrass()
    if (mode === MODE.house.value) tileStyles = textureGrass()
    if (mode === MODE.water.value) tileStyles = textureWater()
    if (mode === MODE.sand.value) tileStyles = textureSand()

    setState({ ...oldState, mode, rotation, tileStyles })
  }

  return (
    <button
      type="button"
      onClick={tileClicked}
      data-mode={state.mode}
      data-rotation={state.rotation}
      className={`tile ${styles.tile} ${styles[state.mode]} ${styles[`mod-${state.rotation}`]}`}
    >
      <div className={styles.innerTile} style={state.tileStyles} />
      <div className={styles.blank1} />
    </button>
  )
}

export default Tile
