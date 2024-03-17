import ContactUsForm from "./ContactUsForm";
import circle from "../../Assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import { motion } from "framer-motion";

function ContactUsHeader() {
  return (
    <motion.div animate={{ y: [-50, 0] }} className="contactUsHeader">
      <div className="contactUsHeader__descriptionDiv">
        <h1 className="contactUsHeader__descriptionDiv__title">Contact Us</h1>
        <p className="contactUsHeader__descriptionDiv__p">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <img
        className="contactUsHeader__backGroundSvg"
        src={circle}
        alt="aboutUsHeader"
      />
      <ContactUsForm />
    </motion.div>
  );
}

export default ContactUsHeader;
