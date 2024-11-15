import { useState } from "react";
import callImg from "../../assets/call-alt.png";
import bellPaperImg from "../../assets/top-view-bell-pepper.png";
import CardContent from "../CardContent/CardContent";
import "./About.css";
const About = () => {
  const [defaultNum, setDefaultNum] = useState(1);

  const handleNum = (num) => {
    setDefaultNum(num);
  };

  return (
    <div className="about-container">
      <div className="bell-paper-img">
        <img src={bellPaperImg} alt="top-view-bell-pepper" />
      </div>
      <div className="about-section">
        <div className="about-img"></div>

        <div className="about-tab">
          <div>
            <div className="tab">
              <button
                className="tablinks"
                onClick={() => handleNum(1)}
                id="defaultOpen"
              >
                About
              </button>
              <button className="tablinks" onClick={() => handleNum(2)}>
                Experience
              </button>
              <button className="tablinks" onClick={() => handleNum(3)}>
                Contact
              </button>
            </div>

            <CardContent idNum={defaultNum} />

            {/* <div id="About" className="tabcontent">
              <h3>Taste the authentic Saudi cuisine</h3>
              <p>
                Saudi Arabian cuisine (Arabic: المطبخ العربي السعودي) varies
                according to the diverse landscapes and regions of the country.
                The environmental, geographic, and cultural diversity within
                this vast area has led to a wide variety of dishes. Saudi Arabia
                encompasses different regions, resulting in cuisines from the
                Central region, Eastern, Southern and Western regions.
              </p>
            </div> */}

            {/* <div id="Experience" className="tabcontent">
              <h3>What Makes for a Great Restaurant Experience?</h3>
              <p>
                Do today’s restaurant consumers want great convenience or a
                great experience? The answer … both. Technomic analysis shows
                consumers still value experience, even at a time when more than
                one-third of food purchased from restaurants is consumed
                elsewhere. With third-party delivery companies handling billions
                in sales, fine dining grew at a quicker pace than any other
                restaurant segment in 2018, and is projected to lead again in
                2019. Such seemingly conflicting data tells a broader story:
                experience matters, but the definition of what constitutes a
                great experience is evolving.
              </p>
            </div> */}

            {/* <div id="Contact" className="tabcontent">
              <h3>LET&apos;S TALK</h3>
              <p>
                Email: demo@website.com <br />
                Phone: 1-800-222-4545 <br />
                Fax: 1-800-222-4545
              </p>
            </div> */}
          </div>
          <div className="about-more">
            <div>
              <button>ABOUT MORE</button>
            </div>
            <div className="call-info">
              <img src={callImg} alt="call-alt.png" />
              <p>+88 3426 739 485</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
