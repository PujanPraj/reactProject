import React from "react";
import Testilist from "../lists/Testilist";

const Testimonial = () => {
  return (
    <>
      <div className="testimonialSection py-5">
        <div className="container testimonialHeading text-center mb-5">
          <h2>What Customers Say About Us</h2>
          <p>See Why Thousands of Customer Love Us!</p>
        </div>

        <div className="container testiCards ">
          <Testilist />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
