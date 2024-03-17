import circle from "../../Assets/about/desktop/bg-pattern-hero-about-desktop.svg";

function AboutUsDivs(props) {
  return (
    <div className="aboutUsDivs">
      <div className="aboutUsDivs__descriptionDiv">
        <h1 className="aboutUsDivs__descriptionDiv__title">{props.title}</h1>
        <p className="aboutUsDivs__descriptionDiv__p">{props.p1}</p>
        <p className="aboutUsDivs__descriptionDiv__p">{props.p2}</p>
      </div>
      <img className="aboutUsDivs__img" src={props.img} alt="aboutUs" />
      <div className="aboutUsDivs__background"></div>
    </div>
  );
}

export default AboutUsDivs;
