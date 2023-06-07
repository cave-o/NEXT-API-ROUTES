// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomeSwiper() {

    return (
        <section className="home-swiper">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                navigation
                // pagination={{ clickable: true }}
            >
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <span>Gopiny - Discover the Essence of Lake Victoria</span>
                        <h3>Immerse Yourself in Unforgettable Adventures</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-2'>
                    <div className="slide">
                        <span>Gopiny - Unleash Your Spirit of Exploration</span>
                        <h3>Explore the Hidden Treasures of Kisumu</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-3'>
                    <div className="slide">
                        <span>Gopiny - Your Gateway to Extraordinary Experiences</span>
                        <h3>Embark on Memorable Journeys in Western Kenya</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section >
    )
}

export default HomeSwiper