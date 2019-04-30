import React, { useState } from 'react'

import Grid from './Grid'
import Controls from './Controls'
import styles from './App.css'

const App = () => {
  const [mode, setMode] = useState('grass')
  const [rotation, setRotation] = useState(0)

  return (
    <div className={styles.wrapper}>
      <p className={styles.tip}>
        Tip: Use `shift + click` to rotate tiles quickly
      </p>
      <Controls mode={mode} setMode={setMode} />
      <Grid mode={mode} rotation={rotation} setRotation={setRotation} />
    </div>
  )
}

export default App
