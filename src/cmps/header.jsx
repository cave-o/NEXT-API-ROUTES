import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { faTimes} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Header() {

    const [isActive, setIsActive] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    function getClassName(selectedLink){
        if(isActive === selectedLink) return 'active'
        else return ''
    }

    return (
        <header className="header">
            <a href="/home-page" className="logo">gopiny.</a>
            <nav className={`navbar ${isMenuOpen && 'open'}`}>
                <a className={getClassName('home')} onClick={()=>setIsActive('home')} href="/home-page">Home</a>
                <a  className={getClassName('package')} onClick={()=>setIsActive('package')} href="/package">Package</a>
                <a  className={getClassName('book')} onClick={()=>setIsActive('book')} href="/book">Book</a>
                <a  className={getClassName('about')} onClick={()=>setIsActive('about')} href="/about">About</a>
            </nav>
            <FontAwesomeIcon className={`menu-btn ${isMenuOpen && 'open'}`} icon={isMenuOpen ? faTimes : faBars} onClick={() => setIsMenuOpen(prevState => !prevState)}></FontAwesomeIcon>
        </header>
    )
}

export default Header