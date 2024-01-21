import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../images/logo_dark.png'
const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.container}>
        <img src={Logo} alt="" />
        <button>Busca un Carro</button>
    </div>
</div>
  )
}

export default Footer
