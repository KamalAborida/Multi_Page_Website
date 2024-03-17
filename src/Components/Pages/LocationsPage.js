import LocationDiv from "../LocationsPage/LocationDiv";
import GeneralContext from "../Context/general-context";
import { useContext, useEffect } from "react";

function LocationsPage() {
  const ctx = useContext(GeneralContext);

  useEffect(() => {
    ctx.scrollToTheTop();
  });

  return (
    <div className="locationsPage">
      <LocationDiv countryName="Canada" countryChar="Central (CA)" />
      <LocationDiv
        countryName="Australia"
        phone="P : (02) 6720 9092"
        mail="M : contact@designo.au"
        countryChar="AU"
        street="19 Balonne Street"
        city="New South Wales 2443"
      />
      <LocationDiv
        countryName="United Kingdom"
        phone="P : 078 3115 1400"
        mail="M : contact@designo.uk"
        countryChar="UK"
        street="13  Colorado Way"
        city="Rhyd-y-fro SA8 9GA"
      />
    </div>
  );
}

export default LocationsPage;
