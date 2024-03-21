import { useNavigate } from "react-router";
import Button from "../Re-Usable/Button";

function LocationCTADiv(props) {
  const navigate = useNavigate()
  let imgName = props.title === "UNITED KINGDOM" ? "united-kingdom" : props.title.toLowerCase()
  const img = require(`../../Assets/shared/desktop/illustration-${imgName}.svg`);

  const seeLocationHandler = () => {
    navigate("/Multi_Page_Website/locations")
  }

  return (
    <div className="locationCollection__locationCTADiv locationCTADiv">
      <img
        className="locationCollection__locationCTADiv__img"
        src={img}
        alt={"svg"}
      />
      <h3 className="locationCollection__locationCTADiv__title">
        {props.title}
      </h3>
      <Button title="SEE LOCATION" onClick={seeLocationHandler}/>
    </div>
  );
}

export default LocationCTADiv;
