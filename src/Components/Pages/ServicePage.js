import { json, useLoaderData, useParams } from "react-router";
import OtherServices from "../ServicePage/OtherServices";
import ServiceExamples from "../ServicePage/ServiceExamples";
import ServiceHeader from "../ServicePage/ServiceHeader";
import { useContext, useEffect } from "react";
import GeneralContext from "../Context/general-context"

function ServicePage(props) {
  const params = useParams();
  const data = useLoaderData();
  const ctx = useContext(GeneralContext)

  useEffect(() => {
    ctx.scrollToTheTop()
  }, [params]);

  return (
    <div>
      <ServiceHeader />
      <ServiceExamples data={data[params.service]} />
      <OtherServices others={data} />
    </div>
  );
}

export default ServicePage;

export async function loader() {
  const response = await fetch(
    `https://multi-page-website-db-dab3c-default-rtdb.firebaseio.com/.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const respData = await response.json();
    return respData;
  }
}
