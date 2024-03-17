import React from "react-dom";
import Navlist from "../MainLayout/NavList";

import { motion } from "framer-motion";

function NavModal(props) {
  return (
    <>
      {React.createPortal(
        <>
          <motion.div animate={{y: [-40, 0]}} exit={{y: [0, -10], opacity: 0}} className="navModal">
            <Navlist
              hamHandler={props.hamHandler}
              closeModal={props.closeModal}
            />
          </motion.div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default NavModal;
