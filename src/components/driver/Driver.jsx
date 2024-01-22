import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2>Encuentra el coche perfecto y <span>pruebalo antes de comprarlo!</span></h2>
            <p>Asegúrese de que sus futuras ruedas se adapten bien a su estilo de vida tomándose su tiempo en el asiento del conductor.</p>
            <button>Explorar autos</button>
        </div>
    </div>
  )
}

export default Driver