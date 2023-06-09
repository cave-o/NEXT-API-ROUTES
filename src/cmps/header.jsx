import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isActive, setIsActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function getClassName(selectedLink) {
    if (isActive === selectedLink) return "active";
    else return "";
  }

  return (
    <header className="header">
      <Link href="/home-page" passHref>
        <a className="logo">gopiny.</a>
      </Link>
      <nav className={`navbar ${isMenuOpen && "open"}`}>
        <Link href="/home-page" legacyBehavior>
          <a className={getClassName("home")} onClick={() => setIsActive("home")}>
            Home
          </a>
        </Link>
        <Link href="/tours" legacyBehavior> 
          <a className={getClassName("package")} onClick={() => setIsActive("package")}>
            Package
          </a>
        </Link>
        <Link href="/book" legacyBehavior>
          <a className={getClassName("book")} onClick={() => setIsActive("book")}>
            Book
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={getClassName("about")} onClick={() => setIsActive("about")}>
            About
          </a>
        </Link>
      </nav>
      <FontAwesomeIcon
        className={`menu-btn ${isMenuOpen && "open"}`}
        icon={isMenuOpen ? faTimes : faBars}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      ></FontAwesomeIcon>
    </header>
  );
}

export default Header;
