import { fakeData } from "../../../fakeData";
import "./CardContent.css";

// eslint-disable-next-line react/prop-types
const CardContent = ({ idNum }) => {
  const foundData = fakeData.find((data) => data.id === idNum);

  return (
    <div id="Experience" className="tabcontent">
      <h3>{foundData.title}</h3>
      <p>{foundData.content} </p>
    </div>
  );
};

export default CardContent;
