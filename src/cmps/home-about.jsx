import aboutImg from "../imgs/about-img.jpg"
import Image from 'next/image'

function HomeAbout() {
    return (
        <section className="home-about">
            <div className="img-container">
                <Image fill src={aboutImg} alt="" />
            </div>
            <article>
                <h3>about us</h3>
                <p>
                Experience the wonders of Lake Victoria with us. Explore breathtaking landscapes, immerse in authentic cultural encounters, and create lasting memories. Join Gopiny Experience today.
                </p>
                <a href="/about" className="btn">read more</a>
            </article>
        </section>
    )
}

export default HomeAbout