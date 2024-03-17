import AboutUsDivs from "../AboutUs/AboutUsDivs";
import AboutUsHeader from "../AboutUs/AboutUsHeader";
import LocationCollection from "../Re-Usable/LocationCollection";
import { useContext, useEffect } from "react";
import GeneralContext from "../Context/general-context";

function AboutUsPage() {
  const ctx = useContext(GeneralContext);

  let img1;
  let img2;

  useEffect(() => {
    ctx.scrollToTheTop();
  });

  if (window.innerWidth < ctx.mobileWidth) {
    img1 = require(`../../Assets/about/mobile/image-world-class-talent.jpg`);
    img2 = require(`../../Assets/about/mobile/image-real-deal.jpg`);
  } else if (window.innerWidth < ctx.tabletWidth) {
    img1 = require(`../../Assets/about/tablet/image-world-class-talent.jpg`);
    img2 = require(`../../Assets/about/tablet/image-real-deal.jpg`);
  } else {
    img1 = require(`../../Assets/about/desktop/image-world-class-talent.jpg`);
    img2 = require(`../../Assets/about/desktop/image-real-deal.jpg`);
  }

  return (
    <div classname="aboutUsPage">
      <AboutUsHeader />
      <AboutUsDivs
        title="World-class talent"
        p1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        p2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        img={img1}
      />
      <LocationCollection />
      <AboutUsDivs
        title="The real deal"
        p1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        p2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        img={img2}
      />
    </div>
  );
}

export default AboutUsPage;
