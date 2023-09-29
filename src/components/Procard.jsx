import React from "react";
import Prolist from "../lists/Prolist";

const Procard = (props) => {
  return (
    <>
      <div className="proCardSection">
        <div className="row">
          {props.items.map((value) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={value.id}>
                <div className="card proCard">
                  <img
                    src={value.img}
                    className="card-img-top proImg"
                    alt={value.title}
                  />

                  <div className="card-body">
                    <h6>{value.title}</h6>
                    <p>{value.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Procard;
