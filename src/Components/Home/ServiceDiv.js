import { useNavigate } from "react-router";
import arrow from "../../Assets/shared/desktop/icon-right-arrow.svg"

function ServiceDiv(props) {
  const navigate = useNavigate()

  const serviceNavigationHandler = () => {
    navigate(props.navLink)
  }

  return (
    <div className={`serviceDiv serviceCollection__serviceDiv ${props.className}`} onClick={serviceNavigationHandler}>
      <h1 className="serviceDiv__title">{props.title}</h1>
      <p className="serviceDiv__p">VIEW PROJECT <img src={arrow} alt="arrow"/></p>
      <div className="backdrop serviceDiv__backdrop"></div>
      <img className="serviceDiv__img" src={props.img} alt="web" />
    </div>
  );
}

export default ServiceDiv;
