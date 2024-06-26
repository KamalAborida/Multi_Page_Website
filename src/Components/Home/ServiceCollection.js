import webDesign from "../../Assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../../Assets/home/desktop/image-app-design.jpg";
import graphicDesign from "../../Assets/home/desktop/image-graphic-design.jpg";
import ServiceDiv from "./ServiceDiv";

function ServiceCollection() {

  return (
    <div className="serviceCollection">
      <ServiceDiv title="WEB DESIGN" img={webDesign} navLink="/Multi_Page_Website/Web Design"/>
      <ServiceDiv title="APP DESIGN" img={appDesign} navLink="/Multi_Page_Website/App Design"/>
      <ServiceDiv title="GRAPHIC DESIGN" img={graphicDesign} navLink="/Multi_Page_Website/Graphic Design"/>
    </div>
  );
}

export default ServiceCollection;
