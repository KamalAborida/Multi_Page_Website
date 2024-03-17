import FeatureDiv from "./FeatureDiv";
import passionateSvg from "../../Assets/home/desktop/illustration-passionate.svg";
import friendlySvg from "../../Assets/home/desktop/illustration-friendly.svg";
import resourcefulSvg from "../../Assets/home/desktop/illustration-resourceful.svg";

function FeaturesCollection() {
  return (
    <div className="featuresCollection">
      <FeatureDiv
        title="PASSIONATE"
        p="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        img={passionateSvg}
      />
      <FeatureDiv
        title="RESOURCEFUL"
        p="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        img={resourcefulSvg}
      />
      <FeatureDiv
        title="FRIENDLY"
        p=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        img={friendlySvg}
      />
    </div>
  );
}

export default FeaturesCollection;
