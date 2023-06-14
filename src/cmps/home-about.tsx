import aboutImg from "../imgs/cleanlake.jpg"
import Image from "next/image"
import Link from 'next/link';

function HomeAbout() {
    return (
        <section className="home-about">
            <div className="img-container">
                <Image
                    fill
                    src={aboutImg}
                    alt=""
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
            </div>
            <article>
                <h3>about us</h3>
                <p>
                Experience the wonders of Lake Victoria with us. Explore breathtaking landscapes, immerse in authentic cultural encounters, and create lasting memories. Join Gopiny Experience today.
                </p>
                <Link href="/about" className="btn">read more</Link>
            </article>
        </section>
    );
}

export default HomeAbout