// src/components/AwardsCarousel.js
import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { awards } from '../data';

const AwardsCarousel = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="awards-carousel"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <div className="awards-slide-content">
              <img src={award.imageUrl} alt={award.title} className="card-image" loading="lazy" />
              <div className="card-content">
                <h4>{award.title}</h4>
                <p>{award.issuer} - {award.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
});

export default AwardsCarousel;