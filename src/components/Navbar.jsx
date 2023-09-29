import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 70) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <>
      <nav
        className={
          shadow
            ? "navbar navShadow navbar-expand-lg slide-in-top"
            : "navbar navbar-expand-lg"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            MATE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="demoSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Demos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="collectionSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Collection Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="collectionSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Product Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="mobileSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Responsive Layout
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="featureSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="faqSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactSection"
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Contact US
                </Link>
              </li>
            </ul>

            <div className="navBtn ms-auto">
              <button className="sqBtn me-2">Submit a Request</button>
              <button className="sqBtn">Purchase Now</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
