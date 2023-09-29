import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <div className="faqSection py-5 text-center" id="faqSection">
        <div className="faqHeading mb-5 text-center">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="container ">
          <div className="faqBox d-flex justify-content-between align-items-center mb-5">
            <div className="box">
              <img
                className="mb-3 shake-horizontal"
                src="images/policy-1.png"
                alt=""
              />
              <h6>Documentation</h6>
            </div>
            <div className="box">
              <img
                className="mb-3 shake-horizontal"
                src="images/policy-2.png"
                alt=""
              />
              <h6>License Policy</h6>
            </div>
            <div className="box">
              <img
                className="mb-3 shake-horizontal"
                src="images/policy-3.png"
                alt=""
              />
              <h6>Refund Policy</h6>
            </div>
            <div className="box">
              <img
                className="mb-3 shake-horizontal"
                src="images/policy-4.png"
                alt=""
              />
              <h6>Our Portfolio</h6>
            </div>
            <div className="box">
              <img
                className="mb-3 shake-horizontal"
                src="images/policy-5.png"
                alt=""
              />
              <h6>Full Theme Features</h6>
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default FAQ;
