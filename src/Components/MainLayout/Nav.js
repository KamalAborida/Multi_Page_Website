import NavList from "./NavList";
import logoNav from "../../Assets/shared/desktop/logo-dark.png";
import logoFooter from "../../Assets/shared/desktop/logo-light.png";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import GeneralContext from "../Context/general-context";
import HamIcon from "../../Assets/shared/mobile/icon-hamburger";

function Nav(props) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const ctx = useContext(GeneralContext);

  useEffect(() => {
    if (window.innerWidth < ctx.mobileWidth && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth > ctx.mobileWidth && isMobile) {
      setIsMobile(false);
    }
  }, [ctx.mobileWidth, isMobile]);

  const logoHandler = () => {
    navigate("/");
  };

  return (
    <motion.div
      animate={{ y: [-50, 0] }}
      className={`nav ${props.place === "footer" ? "nav-footer" : ""}`}
    >
      <img
        className="nav__logo"
        src={props.place === "footer" ? logoFooter : logoNav}
        alt="logo"
        onClick={logoHandler}
      />
      {(!isMobile || (isMobile && props.place === "footer")) && (
        <NavList closeModal={props.closeModal} />
      )}
      {isMobile && props.place !== "footer" && (
        <HamIcon onClick={props.hamHandler} />
      )}
    </motion.div>
  );
}

export default Nav;
