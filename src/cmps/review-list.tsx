// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image'
import ReviewPreview from './review-preview';

interface IReviews {
    stars: number;
    content: string;
    name: string;
    description: string;
    imgUrl: string;
    id: number;
  }

  interface ReviewListProps {
    reviews: IReviews[];
    }


function ReviewList({ reviews }: ReviewListProps) {
    return (
        <section className="reviews">
            <Swiper
                loop
                autoHeight
                grabCursor
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}

            >
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ratione error iusto, nisi laudantium enim. Cupiditate ea perspiciatis, quod ratione rem, ipsum, cumque ipsam voluptas nisi tenetur beatae sint minus.</p>
                        <h3>emma hope</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-3_tzf7mp.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* {reviews.length && <ul className="box-container"> */}
                {reviews.length && reviews.map(review => {
                    return (
                        <SwiperSlide key={review.id}>
                            <ReviewPreview review={review} />
                        </SwiperSlide>
                    )
                })}
                {/* </ul>} */}
                {/* <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ratione error iusto, nisi laudantium enim. Cupiditate ea perspiciatis, quod ratione rem, ipsum, cumque ipsam voluptas nisi tenetur beatae sint minus.</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-1_bagloy.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit libero, temporibus incidunt eveniet quisquam cumque. Dicta neque, est quibusdam velit ducimus incidunt, voluptatem eius qui nisi tempore fugiat explicabo voluptates delectus beatae? Quo maxime nesciunt vel voluptates expedita assumenda.</p>
                        <h3>gil don</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-2_timo2g.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit libero, temporibus incidunt eveniet quisquam cumque. Dicta neque, est quibusdam velit ducimus incidunt, voluptatem eius qui nisi tempore fugiat explicabo voluptates delectus beatae? Quo maxime nesciunt vel voluptates expedita assumenda.</p>
                        <h3>blake jin</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-3_tzf7mp.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officia neque aliquam amet accusamus? At?</p>
                        <h3>bar hem</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-4_z8eb6n.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque velit dolorum pariatur esse deleniti ea voluptatum architecto reiciendis facilis soluta suscipit nam, voluptates deserunt, dolore nulla? Architecto ab repellat at quisquam debitis, quas officia.</p>
                        <h3>george yellow</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327860/travelagency/pic-5_u3ttx6.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quaerat provident sed nam odit molestias modi culpa laborum ipsum recusandae?</p>
                        <h3>jim grand</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327861/travelagency/pic-6_afkzxg.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>

        </section >
    )
}

export default ReviewList