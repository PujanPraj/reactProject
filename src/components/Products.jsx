import React, { useState } from "react";
import Procard from "./Procard";
import Prolist from "../lists/Prolist";
import { Link } from "react-scroll";

const Products = () => {
  const [items, setItems] = useState(Prolist);
  const filterItem = (categItem) => {
    const updatedItems = Prolist.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <div className="productSection py-5" id="demoSection">
        <div className="productHeading  pb-5">
          <h3>
            <span>75+</span> PRE-BUILD DEMOS
          </h3>
          <p>
            Some demos need password, please enter "1" to view demo. Use the
            filter on the left sidebar to filter out the layouts/themes that
            best suit for you
          </p>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-3 ">
              <div className="filter">
                <h5>FILTER BY</h5>

                <div>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => setItems(Prolist)}
                  >
                    <h6>All Demos</h6>
                    <span>75</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("modemate")}
                  >
                    <h6>Clothing & Fashion</h6>
                    <span>18</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("freshmate")}
                  >
                    <h6>Organic Food & Drinks</h6>
                    <span>03</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("petmate")}
                  >
                    <h6>Pet Shop & Pet Care</h6>
                    <span>04</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("weedmate")}
                  >
                    <h6>Cannabix & Marijuana</h6>
                    <span>04</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("biomate")}
                  >
                    <h6>Single Product</h6>
                    <span>10</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("shoes")}
                  >
                    <h6>Shoes & Sportswear</h6>
                    <span>06</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("coolmate")}
                  >
                    <h6>POD T-Shirt</h6>
                    <span>11</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("digimate")}
                  >
                    <h6>Electronics & Megashop</h6>
                    <span>12</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("onemate")}
                  >
                    <h6>Watch</h6>
                    <span>01</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("playmate")}
                  >
                    <h6>Game & Entertainment</h6>
                    <span>04</span>
                  </Link>
                  <Link
                    to="demoSection"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="filside"
                    onClick={() => filterItem("teemate")}
                  >
                    <h6>Dark Style</h6>
                    <span>07</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-9">
              <Procard items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
