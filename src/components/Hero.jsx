import React from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import OwlCarousel from "react-owl-carousel";

const Hero = () => {
  return (
    <>
      <div className=" hero" id="heroSection">
        <div className="container mainHero py-5">
          <div className="row ">
            <div className="col-12 col-md-5 col-lg-4">
              <h4 className="mb-5">
                The Mulitipurpose <br /> Premium Shopify Theme
              </h4>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Shopify OS 2.0
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>NO coding knowledge
                  required
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>NO Monthly charge
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>High Converting Shopify
                  Theme
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Maximum Customizability
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Premium Support
                </li>
              </ul>
              <div className="navBtn mt-5">
                <button className="sqBtn me-2">View Demos</button>
                <button className="sqBtn">Contact Us</button>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 ">
              <div className="heroImg d-flex justify-content-end">
                <OwlCarousel
                  className="owl-theme"
                  items="1"
                  autoplay
                  loop
                  dots="false"
                >
                  <div className="item">
                    <img src="images/hero1.png" alt="hero1" />
                  </div>
                  <div className="item">
                    <img src="images/hero.png" alt="hero2" />
                  </div>
                  <div className="item">
                    <img src="images\hero3.png" alt="hero3" />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
