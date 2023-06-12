import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { faStar } from "@fortawesome/free-solid-svg-icons"

interface IReview {
  stars: number;
  content: string;
  name: string;
  description: string;
  imgUrl: string;
  id: number;
}

interface ReviewPreviewProps {
  review: IReview;
}

export default function ReviewPreview({ review }: ReviewPreviewProps) {
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


