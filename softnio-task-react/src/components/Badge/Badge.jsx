import badgeImg from "../../assets/badge.png";
import rectangleImg from "../../assets/rectangle.png";
import shoppingBagImg from "../../assets/shopping-bag.png";
import "./Badge.css";
const Badge = () => {
  return (
    <div className="badge-container">
      <div className="badge">
        <img src={rectangleImg} alt="rectangle" />
        <div className="badge-text">
          <h3>FAST DELIVERY</h3>
          <p>Within 30 minutes</p>
        </div>
      </div>
      <div className="badge">
        <img src={badgeImg} alt="badge" />
        <div className="badge-text">
          <h3>ABSOLUTE DINING</h3>
          <p>Best buffet restaurant</p>
        </div>
      </div>
      <div className="badge">
        <img src={shoppingBagImg} alt="shopping-bag" />

        <div className="badge-text">
          <h3>PICKUP DELIVARY</h3>
          <p>Grab your food order</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
