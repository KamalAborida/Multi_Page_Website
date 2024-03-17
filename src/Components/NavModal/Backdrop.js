import React from "react-dom";
import { motion } from "framer-motion";

function Backdrop(props) {
  const backDropHandler = () => {
    props.setIsNavModal(false);
  };

  return (
    <>
      {React.createPortal(
        <>
          <motion.div
            animate={{ y: [-10, 0] }}
            exit={{ x: [0, 1000], opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="backdropModal"
            onClick={backDropHandler}
          ></motion.div>
        </>,
        document.getElementById("backdrop")
      )}
    </>
  );
}

export default Backdrop;
