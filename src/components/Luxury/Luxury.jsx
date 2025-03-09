import React from 'react'
import styles from './Luxury.module.css'

// imagenes

import rolls from './images-luxury/rolls-royce.webp'
import maserati from './images-luxury/maseratti.jpeg'
import rangerover from './images-luxury/range-rover.avif'
import porschedos from './images-luxury/porsche-2.avif'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
    <div className={styles.heading}>
<h1>Selección de lujo</h1>
<div className={styles.text_bg}>
<p>
  <span>Selecciona entre los mejores vehículos de lujo para rodar con estilo</span>
</p>
</div>

</div>

<div className={styles.container}>
<div className={styles.card}>
  <img src= {rolls}  alt="" />
  <div className={styles.content}>
      <h3>Rolls Royce</h3>
  </div>
</div>
<div className={styles.card}>
  <img src={maserati} alt="" />
  <div className={styles.content}>
      <h3>Maserati</h3>
  </div>
</div>
<div className={styles.card}>
  <img src={rangerover} alt="" />
  <div className={styles.content}>
      <h3>Range Rover</h3>
  </div>
</div>
<div className={styles.card}>
  <img src={porschedos} alt="" />
  <div className={styles.content}>
      <h3>Porsche</h3>
  </div>
</div>
</div>
</div>
  )
}

export default Luxury