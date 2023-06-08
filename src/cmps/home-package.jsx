import img1 from "../imgs/img-1.jpg"
import img2 from "../imgs/img-2.jpg"
import img3 from "../imgs/img-3.jpg"
import Image from 'next/image'

function HomePackage() {
    return (
        <section className="home-package">
            <h1 className="heading-title">our packages</h1>
            <div className="box-container">
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img1} alt="" />
                    </div>
                    <article>
                        <h3>Sunrise Cruise Package</h3>
                        <p>
                        Witness the beauty of Lake Victoria's daybreak with a captivating sunrise cruise. Sail along calm waters, mingle with local fishermen, and marvel at the grazing hippos and soaring birds. Immerse yourself in the tranquility of the morning breeze while creating unforgettable memories.
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img2} alt="" />
                    </div>
                    <article>
                        <h3>Kakamega Forest Exploration</h3>
                        <p>
                        Embark on a journey to Kakamega Forest, the remnants of a rainforest stretching from West Africa. Encounter diverse tree species, vibrant birdlife, and playful monkeys. Explore this enchanting forest and create lasting memories amidst its natural wonders.
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img3} alt="" />
                    </div>
                    <article>
                        <h3>Ndere Island Adventure</h3>
                        <p>
                        Set sail to Ndere Island National Park or embark on a thrilling fishing trip around the archipelago of smaller islands. Enjoy the pristine beauty of the island, witness diverse wildlife, and engage in exciting water activities. Experience the captivating allure of Lake Victoria's hidden gems.
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
            </div>

            <div className="load-more">
                <a href="package" className="btn">load more</a>
            </div>
        </section>
    )
}

export default HomePackage