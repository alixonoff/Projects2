import "./Muhammadali.css";
import firstImg from "../../assets/image.png.png";
import checkPng from "../../assets/check.png.png";

const Muhammadali = () => {
  return (
    <div className="container">
      <div className="img">
        <img src={firstImg} alt="" />
      </div>
      <div className="first-page">
        <h1 className="title">
          Cooked by the <br /> Best Chefs
        </h1>
        <p className="text">
          Believing neglected so so allowance existence departure in. In design
          active temper be <br /> uneasy. Thirty for remove plenty regard you{" "}
          <br />
          summer though. He preference connection <br /> astonished on of ye.{" "}
        </p>
        <div className="check">
          <h2 className="text1">
            <img src={checkPng} alt="" /> A guaranteed delicious meal
          </h2>
          <h2 className="text1">
            <img src={checkPng} alt="" />
            Food is guaranteed hygienic
          </h2>
          <h2 className="text1">
            <img src={checkPng} alt="" /> 
            Cooked quickly
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Muhammadali;
