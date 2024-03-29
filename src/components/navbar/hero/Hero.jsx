import React from 'react'
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Localizacion</label>
          <input
            className={styles.text_input}
            type='text'
            placeholder='Search Location'
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>Desde</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Hasta</label>
          <input type='date' />
        </div>
        <div className={styles.search_btn}>
          <button className={styles.btn}>Busca un auto!</button>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  )
}

export default Hero