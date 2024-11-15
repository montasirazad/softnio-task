import image1 from '../../assets/image1.png';
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="banner-section">
        <div className="banner-text-div">
          <div className="banner-title">
            <h1>Taste the authentic Saudi cuisine</h1>
          </div>
          <div className="banner-detail">
            <p>
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button>EXPLORE MENU</button>
          </div>
        </div>

        <div className="banner-img">
          <img src={image1} alt="" />
          <div className="logo1"></div>
          <div className="logo2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
