import phoneSvg from "../../Assets/home/desktop/image-hero-phone.png";
import circleSvg from "../../Assets/home/desktop/bg-pattern-hero-home.svg";
import Button from "../Re-Usable/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router";

function HomeHeader() {
  const navigate = useNavigate()

  const learnMoreHandler = () => {
    navigate("/Multi_Page_Website/aboutus")
  }

  return (
    <motion.div
      animate={{ x: [-100, 0], opacity: [0, 1] }}
      className="homeHeader"
    >
      <div className="homeHeader__descriptionDiv">
        <h1 className="homeHeader__descriptionDiv__title">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="homeHeader__descriptionDiv__p">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button title="LEARN MORE" color="btn-onDark" onClick={learnMoreHandler}/>
      </div>
      <img className="homeHeader__circleSvg" src={circleSvg} alt="circleIcon" />
      <img className="homeHeader__phoneSvg" src={phoneSvg} alt="phoneIcon" />
    </motion.div>
  );
}

export default HomeHeader;
