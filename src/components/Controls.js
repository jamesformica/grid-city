import React from 'react'

import { MODES } from '../constants'
import styles from './Controls.css'

const Controls = ({ mode, setMode }) => {
  const modeClicked = newMode => () => setMode(newMode)

  return (
    <div>
      {MODES.map(m => (
        <button
          key={m.value}
          type="button"
          className={`${mode === m.value ? styles.active : styles.normal} ${styles[m.value]}`}
          onClick={modeClicked(m.value)}
        >
          {m.text}
        </button>
      ))}
    </div>
  )
}

export default Controls
