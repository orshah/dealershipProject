import "./bigpicture.style.css";
import img from "../images/abcd.jpg";

const Bigpicture = () => {
  return (
    <div>
      <img className="toppic" src={img} alt="" />
    </div>
  );
};
export default Bigpicture;
