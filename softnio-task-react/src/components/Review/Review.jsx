import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow=left.png";
import grass from "../../assets/grass.png";
import tomatoSlice from "../../assets/tomato-slice.png";
import "./Review.css";

const Review = () => {
  return (
    <div>
      {/* <!-- Review section start --> */}

      <div className="review-item-container">
        <div className="review-tomato-slice-img">
          <img src={tomatoSlice} alt="" />
        </div>
        <div className="review-grass-img">
          <img src={grass} alt="" />
        </div>
        <div className="review-item-header">
          <div className="review-item-info-main">
            <div className="review-item-info">
              <div className="review-item-shape"></div>
              <p>Crispy,Every bite taste</p>
            </div>
            <h2>What Some of my Customers Say</h2>
          </div>
          <div className="review-arrow-logo-container">
            <div className="arrow-logo-div">
              <img src={arrowLeft} alt="arrow=left" />
            </div>
            <div className="arrow-logo-div">
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
        </div>

        <div className="review-card-item-container">
          <div className="review-card-qoute"></div>
          <div className="review-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DzSSUU37ynQ?si=pEM6D4G9R6A8Zt9F"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Review section end --> */}
    </div>
  );
};

export default Review;
