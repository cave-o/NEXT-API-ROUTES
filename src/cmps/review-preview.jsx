import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { faStar } from "@fortawesome/free-solid-svg-icons"

function ReviewPreview({ review }) {

    // function getStars() {
    //     let stars = ''
    //     for (let i = 0; i < review.stars; i++) {
    //         stars += '<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>'
    //     }
    //     return stars
    // }

    return (
        // <li className="box" key={review.id}>
            // <SwiperSlide>
                <li className="slide" key={review.id}>
                    <div className="stars">
                        {[...Array(review.stars)].map(e => {
                            return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        }
                        )}
                        {/* {getStars()} */}
                    </div>
                    <p>{review.content}</p>
                    <h3>{review.name}</h3>
                    <span>{review.description}</span>
                    <div className="img-container">
                        <Image fill src={review.imgUrl} alt="" />
                    </div>
                </li>
            // </SwiperSlide>
        // </li>

    )
}

export default ReviewPreview