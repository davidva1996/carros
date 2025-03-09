import React from 'react'
import styles from './Find.module.css'
import Card from './Card'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Imagenes

import audi from './images-cards/audi.avif';
import bmw from './images-cards/bmw.avif';
import chevrolet from './images-cards/chevrolet.avif';
import mercedes from './images-cards/mercedes-benz.avif';
import nissan from './images-cards/nissan.avif';
import toyota from './images-cards/toyota.avif';
import jeep from './images-cards/jeep.avif';
import ford from './images-cards/ford.avif';
import tesla from './images-cards/tesla.avif';
import porsche from './images-cards/porsche.avif';



const Find = () => {
  return (
    <div className={styles.find}>
    <div className={styles.heading}>
      <h1>Encuentra tu coche</h1>
      <div className={styles.text_bg}>
        <p>
          <span>Explora el mercado de coches compartidos más grande del mundo</span>
        </p>
      </div>
    </div>
    <div className={styles.slider_container}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
          // when window width is >= 340px
          340: {
            width: 200,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          // when window width is >= 1040px
          1040: {
            width: 1040,
            slidesPerView: 5,
          },
        }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Card
            image={audi}
            make='Audi'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={bmw}
            make='BMW'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={chevrolet}
            make='Chevrolet'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={mercedes}
            make='Mercedes-Benz'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={nissan}
            make='Nissan'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            image={toyota}
            make='Toyota'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={jeep}
            make='Jeep'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={ford}
            make='Ford'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={tesla}
            make='Tesla'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={porsche}
            make='Porsche'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Find