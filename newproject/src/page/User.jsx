import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function User() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div style={{ height: "200px", width: "100%", backgroundColor: "red" }}>

            <h1>slide1</h1>
          </div>


        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "200px", width: "100%", backgroundColor: "blue" }}>

            <h1>slide2</h1>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "200px", width: "100%", backgroundColor: "orange" }}>
            <h1>slide3</h1>
              </div>
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default User