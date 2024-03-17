import { useContext, useEffect } from "react";
import ContactUsHeader from "../ContactUs/ContactUsHeader";
import LocationCollection from "../Re-Usable/LocationCollection";
import GeneralContext from "../Context/general-context";

function ContactUsPage() {
  const ctx = useContext(GeneralContext);

  useEffect(() => {
    ctx.scrollToTheTop();
  });
  
  return (
    <div>
      <ContactUsHeader />
      <LocationCollection />
    </div>
  );
}

export default ContactUsPage;
