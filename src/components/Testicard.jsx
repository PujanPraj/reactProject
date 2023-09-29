import React from "react";

const Testicard = (props) => {
  return (
    <>
      <div class="card mb-3">
        <div className="testiIcon text-center">
          <img src="images/icon.png" class="card-img-top icon" alt="..." />
        </div>
        <div class="card-body">
          <p class="card-text">{props.para}</p>
          <div className=" d-flex align-items-center">
            <img src="images/about.png" alt="" />
            <div className="card-footer--text ms-3">
              <h6>Customer</h6>
              <p>From Envato</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testicard;
