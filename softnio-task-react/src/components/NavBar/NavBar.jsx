import { useRef } from "react";
import navLogo from "../../assets/Group.png";
import barMenu from "../../assets/bar-menu.png";
import "./NavBar.css";

const NavBar = () => {
  const menuRef = useRef(null);

  const handleMenu = () => {
    menuRef.current.classList.toggle("responsive-nav-link-toggle");
  };

  return (
    <>
      {/* <!-- Nav start--> */}

      <div ref={menuRef} className="responsive-nav-link" id="responsive-menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Clients</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">
              <button className="nav-btn">BOOK A TABLE</button>
            </a>
          </li>
           
        </ul>
      </div>

      <nav>
        <div className="nav-main">
          <div className="logo-div">
            <img src={navLogo} alt="logo" />
            <h1>Restaurant</h1>
          </div>

          <div className="nav-link">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Clients</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="nav-btn">BOOK A TABLE</button>

        <button onClick={handleMenu} className="bar-btn" id="bar-btn">
          <img src={barMenu} alt="" />
          {/* <!-- <a href="*"> </a> --> */}
        </button>
      </nav>
      {/* <!-- Nav end--> */}
    </>
  );
};

export default NavBar;
