import React from "react";
import Idea from "../components/Idea";
import Footer from "./Footer";

const Explore = () => {
  return (
    <>
      <div className="exploreSection text-white py-5">
        <Idea />

        <div className="container exoList py-5 text-center">
          <ul className="horiList">
            <li>
              <i className="fa-regular  fa-circle-check"></i>NO monthly charge
              Page
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>No coding knowledge
              required
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Premium support
            </li>
          </ul>
          <button className="sqBtn mt-5">EXPLORE ALL OF YOUR THEMES</button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Explore;
