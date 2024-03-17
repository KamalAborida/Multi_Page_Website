import facebook from "../../Assets/shared/desktop/icon-facebook.svg";
import instagram from "../../Assets/shared/desktop/icon-instagram.svg";
import youtube from "../../Assets/shared/desktop/icon-youtube.svg";
import twitter from "../../Assets/shared/desktop/icon-twitter.svg";
import pinterest from "../../Assets/shared/desktop/icon-pinterest.svg";

function SocialMediaDiv(props) {
  return (
    <div className="socialMediaDiv">
      <img className="socialMediaDiv__icon" src={facebook} alt="Facebook"/>
      <img className="socialMediaDiv__icon" src={instagram} alt="Instagram"/>
      <img className="socialMediaDiv__icon" src={youtube} alt="YouTube"/>
      <img className="socialMediaDiv__icon" src={twitter} alt="Twitter"/>
      <img className="socialMediaDiv__icon" src={pinterest} alt="Pinterest"/>
    </div>
  );
}

export default SocialMediaDiv;
