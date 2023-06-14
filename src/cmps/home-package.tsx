import img1 from "../imgs/fam-boat-rides.jpg"
import img2 from "../imgs/img-2.jpg"
import img3 from "../imgs/ndere-island.jpg"
import Image from "next/image"
import Link from 'next/link';

function HomePackage() {
    return (
        <section className="home-package">
            <h1 className="heading-title">our packages</h1>
            <div className="box-container">
                <div className="box">
                    <div className="img-container">
                        <Image
                            fill
                            src={img1}
                            alt=""
                            sizes=""
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <article>
                        <h3>Sunrise Cruise Package</h3>
                        <p>
                        Witness the beauty of Lake Victoria&apos;s daybreak with a captivating sunrise cruise. Sail along calm waters, mingle with local fishermen, and marvel at the grazing hippos and soaring birds. Immerse yourself in the tranquility of the morning breeze while creating unforgettable memories.
                        </p>
                        <Link href="/book" className="btn">book now</Link>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image
                            fill
                            src={img2}
                            alt=""
                            sizes=""
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <article>
                        <h3>Kakamega Forest Exploration</h3>
                        <p>
                        Embark on a journey to Kakamega Forest, the remnants of a rainforest stretching from West Africa. Encounter diverse tree species, vibrant birdlife, and playful monkeys. Explore this enchanting forest and create lasting memories amidst its natural wonders.
                        </p>
                        <Link href="/book" className="btn">book now</Link>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image
                            fill
                            src={img3}
                            alt=""
                            sizes=""
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <article>
                        <h3>Ndere Island Adventure</h3>
                        <p>
                        Set sail to Ndere Island National Park or embark on a thrilling fishing trip around the archipelago of smaller islands. Enjoy the pristine beauty of the island, witness diverse wildlife, and engage in exciting water activities. Experience the captivating allure of Lake Victoria&apos;s hidden gems.
                        </p>
                        <Link href="/book" className="btn">book now</Link>
                    </article>
                </div>
            </div>

            <div className="load-more">
                <a href="package" className="btn">load more</a>
            </div>
        </section>
    );
}

export default HomePackage