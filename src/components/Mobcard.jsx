import React from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import OwlCarousel from "react-owl-carousel";

const Molcard = () => {
  const options = {
    items: "4",
    nav: "true",
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <OwlCarousel className="owl-theme text-center" loop autoplay {...options}>
        <div className="item">
          <img src="images/m-1.png" alt="mobile-1" />
        </div>
        <div className="item">
          <img src="images/m-2.png" alt="mobile-2" />
        </div>
        <div className="item">
          <img src="images/m-3.png" alt="mobile-3" />
        </div>
        <div className="item">
          <img src="images/m-4.png" alt="mobile-4" />
        </div>
        <div className="item">
          <img src="images/m-5.png" alt="mobile-5" />
        </div>
        <div className="item">
          <img src="images/m-6.png" alt="mobile-6" />
        </div>
        <div className="item">
          <img src="images/m-7.png" alt="mobile-7" />
        </div>
        <div className="item">
          <img src="images/m-8.png" alt="mobile-8" />
        </div>
        <div className="item">
          <img src="images/m-9.png" alt="mobile-9" />
        </div>
        <div className="item">
          <img src="images/m-10.png" alt="mobile-10" />
        </div>
      </OwlCarousel>
    </>
  );
};

export default Molcard;
