import React from "react";
import Otherlist from "../lists/Otherlist";

const Productpage = () => {
  return (
    <>
      <div className="row">
        {Otherlist.map((value) => {
          return (
            <div className="col-12 col-md-6 col-lg-3" key={value.id}>
              <div className="card proCard">
                <img
                  src={value.img}
                  className="card-img-top colImg"
                  alt={value.title}
                />

                <div className="card-body">
                  <p className="fw-bold">{value.para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productpage;
