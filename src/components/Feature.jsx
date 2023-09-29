import React from "react";
import Featurelist from "../lists/Featurelist";

const Feature = () => {
  return (
    <>
      <div className="featureSection py-5" id="featureSection">
        <div className="featureHeading text-center pb-5">
          <h2>Main Features</h2>
          <p>What Makes Mate Shopify Theme so Power Full ?</p>
        </div>

        <div className="container">
          <div className="row">
            {Featurelist.map((value) => {
              return (
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="featureImg">
                      <img
                        src={value.img}
                        className="card-img-top scale-down-center"
                        alt={value.title}
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{value.title}</h6>
                      <p className="card-text">{value.para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
