import AddressDiv from "../Re-Usable/AddressDiv";
import PhoneMailDiv from "../Re-Usable/PhoneMailDiv";
import SocialMediaDiv from "../Re-Usable/SocialMediaDiv";

function ContactDiv(props) {
  return (
    <div className="contactDiv">
      <AddressDiv />
      <PhoneMailDiv />
      <SocialMediaDiv />
    </div>
  );
}

export default ContactDiv;
