import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isActive, setIsActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function getClassName(selectedLink: string | null) {
    if (isActive === selectedLink) return "active";
    else return "";
  }

  return (
    <header className="header">
      <Link href="/" passHref>
        <span className="logo">gopiny.</span>
      </Link>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <Link
          href="/"
          passHref
          className={getClassName("home")}
          onClick={() => setIsActive("home")}
        >
          Home
        </Link>
        <Link
          href="/tours"
          passHref
          className={getClassName("package")}
          onClick={() => setIsActive("package")}
        >
          Tours
        </Link>
        <Link
          href="/book"
          passHref
          className={getClassName("book")}
          onClick={() => setIsActive("book")}
        >
          Book
        </Link>
        <Link
          href="/about"
          passHref
          className={getClassName("about")}
          onClick={() => setIsActive("about")}
        >
          About
        </Link>
      </nav>
      <FontAwesomeIcon
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        icon={isMenuOpen ? faTimes : faBars}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      />
    </header>
  );
}

export default Header;
