import { useParams } from "react-router";
import { motion } from "framer-motion";

function ServiceHeader() {
  const params = useParams();

  return (
    <motion.div animate={{y: [-50, 0]}} className="serviceHeader">
      <h1 className="serviceHeader__title">{params.service}</h1>
      <p className="serviceHeader__paragraph">
        We deliver eye-catching branding materials that are tailored to meet
        your business objectives.
      </p>
    </motion.div>
  );
}

export default ServiceHeader;
