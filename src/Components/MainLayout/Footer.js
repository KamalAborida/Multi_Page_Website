import ContactDiv from "./ContactDiv";
import Nav from "./Nav";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__content">
        {props.children}
        <Nav place="footer" closeModal={props.closeModal} hamHandler={props.hamHandler}/>
        <div className="footer__content__border"></div>
        <ContactDiv />
      </div>
    </div>
  );
}

export default Footer;
