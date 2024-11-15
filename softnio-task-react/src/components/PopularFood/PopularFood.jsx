import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow=left.png";
import bellPepper from "../../assets/bell-pepper.png";
import classicBurger from "../../assets/classic-burger.png";
import frenchFriesImg from "../../assets/french-fries.png";
import friedShrimpImg from "../../assets/fried-shrimp.png";
import pizzaImg from "../../assets/pizza.png";
import "./PopularFood.css";

const PopularFood = () => {
  return (
    <div>
      {/* <!-- Popular-food-item-start --> */}
      <div className="food-item-container">
        <div className="food-item-bell-paper-img">
          <img src={bellPepper} alt="" />
        </div>

        <div className="food-item-header">
          <div className="food-item-info-main">
            <div className="food-item-info">
              <div className="food-item-shape"></div>
              <p>Crispy,Every bite taste</p>
            </div>
            <h2>POPULAR FOOD ITEMS</h2>
          </div>
          <div className="arrow-logo-container">
            <div className="arrow-logo-div">
              <img src={arrowLeft} alt="arrow=left" />
            </div>
            <div className="arrow-logo-div">
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
        </div>

        <div className="food-item-card-container">
          <div className="food-item-card">
            <img src={classicBurger} alt="" />
            <div className="line"></div>
            <h3>vegetables burger</h3>
            <p>Barbecue Italian cuisine pizza</p>
          </div>

          <div className="food-item-card">
            <img src={pizzaImg} alt="" />
            <div className="line"></div>
            <h3>Spacial Pizza</h3>
            <p>Barbecue Italian cuisine pizza</p>
          </div>

          <div className="food-item-card">
            <img src={frenchFriesImg} alt="" />
            <div className="line"></div>
            <h3>Special french fries</h3>
            <p>Barbecue Italian cuisine</p>
          </div>
          <div className="food-item-card">
            <img src={friedShrimpImg} alt="" />
            <div className="line"></div>
            <h3>Cuisine Chicken</h3>
            <p>Japanese Cuisine Chicken</p>
          </div>
        </div>
      </div>

      {/* <!-- Popular-food-item-end --> */}
    </div>
  );
};

export default PopularFood;
