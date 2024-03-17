import { useParams } from "react-router";
import webDesign from "../../Assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../../Assets/home/desktop/image-app-design.jpg";
import graphicDesign from "../../Assets/home/desktop/image-graphic-design.jpg";
import ServiceDiv from "../../Components/Home/ServiceDiv";
import { useEffect, useState } from "react";

function OtherServices(props) {
  const servicesArr = ["Graphic Design", "App Design", "Web Design"];
  const [otherServices, setOtherServices] = useState([]);
  const params = useParams();

  useEffect(() => {
    const filteredServices = servicesArr
      .filter((elem) => elem !== params.service)
      .map((elem) => {
        let img;
        switch (elem) {
          case "Web Design":
            img = webDesign;
            break;
          case "App Design":
            img = appDesign;
            break;
          case "Graphic Design":
            img = graphicDesign;
            break;
          default:
            break;
        }
        return [elem, img];
      });

    setOtherServices(filteredServices);
  }, [params.service]);


  return (
    <div className="otherServices">
      {otherServices.map((elem) => {
        return (
          <ServiceDiv
            className="otherServices__serviceDiv"
            title={elem[0]}
            img={elem[1]}
            navLink={`/${elem[0]}`}
            key={elem[0]}
          />
        );
      })}
    </div>
  );
}

export default OtherServices;
