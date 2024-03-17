import { useContext } from "react";
import AddressDiv from "../Re-Usable/AddressDiv";
import PhoneMailDiv from "../Re-Usable/PhoneMailDiv";
import GeneralContext from "../Context/general-context";
import { motion } from "framer-motion";

function LocationDiv(props) {
  const ctx = useContext(GeneralContext);
  let imgName =
    props.countryName === "United Kingdom"
      ? "united-kingdom"
      : props.countryName.toLowerCase();
  let img;

  if (window.innerWidth < ctx.mobileWidth) {
    img = require(`../../Assets/locations/tablet/image-map-${imgName}.png`);
  } else if (window.innerWidth < ctx.tabletWidth) {
    img = require(`../../Assets/locations/tablet/image-map-${imgName}.png`);
  } else {
    img = require(`../../Assets/locations/desktop/image-map-${imgName}.png`);
  }

  return (
    <motion.div animate={{y: [-50, 0]}} className="locationDiv">
      <img className="locationDiv__img" src={img} alt="name" />
      <div className="locationDiv__details">
        <h1 className="locationDiv__details__countryName">
          {props.countryName}
        </h1>
        <PhoneMailDiv p1="Contact" p2={props.phone} p3={props.mail} />
        <AddressDiv
          p1={`Designo ${props.countryChar} Office`}
          p2={props.street}
          p3={props.city}
        />
      </div>
    </motion.div>
  );
}

export default LocationDiv;
