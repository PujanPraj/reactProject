import React from "react";
import Colcard from "./Colcard";
import Productpage from "./Productpage";
import Otherpage from "./Otherpage";
import Subnav from "./Subnav";
import { Route, Routes } from "react-router-dom";

const Collection = () => {
  return (
    <>
      <div className="collectionSection py-5" id="collectionSection">
        <div className="collectionHeading container">
          <h2>Product & Collection Pages</h2>
          <p>
            You can easily choose the style for the product page with just 1
            click in the Back-end
          </p>
          <div className="collectionBtn mt-5">
            <Subnav />
          </div>
        </div>
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<Colcard />} />
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/Otherpage" element={<Otherpage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Collection;
