import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import { faMap} from "@fortawesome/free-solid-svg-icons"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="footer">
        <div className="box-container">
            <div className="box">
                <h3>Quick Links</h3>
                <a href="/home-page"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Home</a>
                <a href="/package"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Package</a>
                <a href="/book"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Book</a>
                <a href="/about"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>About</a>
            </div>
            <div className="box">
                <h3>Extra Links</h3>
                <a href="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Ask questions</a>
                <a href="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>About us</a>
                <a href="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Privacy Policy</a>
                <a href="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>Terms of use</a>
            </div>
            <div className="box">
                <h3>Contact Information</h3>
                <a href="#"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+254-702-607010</a>
                <a href="#"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+254-738-607010</a>
                <a href="#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>info@gopiny.com</a>
                <a href="#"><FontAwesomeIcon icon={faMap}></FontAwesomeIcon>Kisumu, Kenya</a>
            </div>
            <div className="box">
                <h3>Follow us</h3>
                <a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>Facebook</a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>Twitter</a>
                <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>Instagram</a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>Linkedin</a>
            </div>
        </div>
        <div className="credit">
            <span>Gopiny</span> | all rights reserved
        </div>
    </footer>
  )
}

export default Footer