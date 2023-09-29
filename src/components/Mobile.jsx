import React from "react";
import Molcard from "./Mobcard";

const Mobile = () => {
  return (
    <>
      <div className="mobileSection py-5 " id="mobileSection">
        <div className="mobileHeading container">
          <h6>Perfectly Crafted For</h6>
          <h2>Mobile Devices</h2>
          <p>
            Best practices for mobile store designs that conversion in your
            store
          </p>
        </div>
        <div className="container ">
          <Molcard />
        </div>
      </div>
    </>
  );
};

export default Mobile;
