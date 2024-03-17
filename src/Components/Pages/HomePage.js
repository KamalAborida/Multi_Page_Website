import { useNavigation } from "react-router";
import FeaturesCollection from "../Home/FeaturesCollection";
import HomeHeader from "../Home/HomeHeader";
import ServiceCollection from "../Home/ServiceCollection";

function HomePage() {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && (
        <>
          <iframe
            src="https://giphy.com/embed/RgzryV9nRCMHPVVXPV"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
            title="loading"
            className="loading"
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/trippy-abstract-pi-slices-RgzryV9nRCMHPVVXPV">
              via GIPHY
            </a>
          </p>
        </>
      )}
      <HomeHeader />
      <ServiceCollection />
      <FeaturesCollection />
    </div>
  );
}

export default HomePage;
