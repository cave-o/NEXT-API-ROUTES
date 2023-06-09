import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { faStar } from "@fortawesome/free-solid-svg-icons"

function ReviewPreview({ review }) {
  return (
    <SwiperSlide key={review.id}>
      <li className="slide">
        <div className="stars">
          {[...Array(review.stars)].map((_, index) => (
            <FontAwesomeIcon icon={faStar} key={index} />
          ))}
        </div>
        <p>{review.content}</p>
        <h3>{review.name}</h3>
        <span>{review.description}</span>
        <div className="img-container">
          <Image fill src={review.imgUrl} alt="" />
        </div>
      </li>
    </SwiperSlide>
  );
}

export default ReviewPreview;
