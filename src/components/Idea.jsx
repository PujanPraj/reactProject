import React from "react";

const Idea = () => {
  return (
    <>
      <div className="ideaSection">
        <div className="d-flex ideaCard align-items-center justify-content-center gap-5 text-start">
          <img src="images/icon-footer.png" alt="" />
          <div className="ideaText">
            <h5>Suggest Demo That You Love</h5>
            <p>
              Send us your idea, it may appear on Mate <br /> in the next
              update!
            </p>
          </div>
          <button className="sqBtn">SUBMIT YOUR IDEA</button>
        </div>
      </div>
    </>
  );
};

export default Idea;
