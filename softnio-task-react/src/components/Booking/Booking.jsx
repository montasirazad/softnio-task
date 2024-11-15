import { useRef } from "react";
import "./Booking.css";

const Booking = () => {
  const dateRef = useRef(null);
  const textRef = useRef(null);
  const handleFocus = (inputType) => {
    if (inputType === "date") {
      dateRef.current.type = inputType;
    } else {
      textRef.current.classList.remove("total-people");
      textRef.current.type = inputType;
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-container-main">
        <div className="book-now-info">
          <div className="book-now"></div>
          <p>Book Now</p>
        </div>
        <div className="booking-info">
          <h1>BOOK YOUR TABLE</h1>
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br />
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form>
          <input type="text" placeholder="Your Name *" />
          <input type="email" placeholder="Your Email" />
          <input
            type="text"
            // onFocus="hideIcon(this,1)"
            onFocus={() => handleFocus("date")}
            placeholder="Reservation Date"
            className="date-input"
            ref={dateRef}
          />
          <input
            type="text"
            onFocus={() => handleFocus("number")}
            ref={textRef}
            placeholder="Total People"
            min="1"
            className="total-people"
          />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button className="book-btn">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
