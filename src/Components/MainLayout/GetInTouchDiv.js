import { useNavigate } from "react-router";
import Button from "../Re-Usable/Button";
import { motion} from "framer-motion";

function GetInTouchDiv() {
  const navigate = useNavigate();

  const getInTouchHandler = () => {
    navigate("/contactus");
  };

  return (
    <motion.div className="getInTouchDiv">
      <div className="getInTouchDiv__desriptionDiv">
        <h2 className="getInTouchDiv__desriptionDiv__title">
          Let’s talk about your project
        </h2>
        <p className="getInTouchDiv__desriptionDiv__p">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button
        title="GET IN TOUCH"
        color="btn-onDark"
        onClick={getInTouchHandler}
      />
    </motion.div>
  );
}

export default GetInTouchDiv;
