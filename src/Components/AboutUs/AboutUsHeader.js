import { useContext } from "react";
import circle from "../../Assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import GeneralContext from "../Context/general-context";
import { motion } from "framer-motion";

function AboutUsHeader(props) {
  const ctx = useContext(GeneralContext);
  let img;

  if (window.innerWidth < ctx.mobileWidth) {
    img = require(`../../Assets/about/mobile/image-about-hero.jpg`);
  } else if (window.innerWidth < ctx.tabletWidth) {
    img = require(`../../Assets/about/tablet/image-about-hero.jpg`);
  } else {
    img = require(`../../Assets/about/desktop/image-about-hero.jpg`);
  }

  return (
    <motion.div animate={{y: [-50, 0]}} className="aboutUsHeader">
      <div className="aboutUsHeader__descriptionDiv">
        <h1 className="aboutUsHeader__descriptionDiv__title">About Us</h1>
        <p className="aboutUsHeader__descriptionDiv__p">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <img className="aboutUsHeader__img" src={img} alt="aboutUs" />
      <img
        className="aboutUsHeader__backGroundSvg"
        src={circle}
        alt="aboutUsHeader"
      />
    </motion.div>
  );
}

export default AboutUsHeader;
