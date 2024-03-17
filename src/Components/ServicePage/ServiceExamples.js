import { useEffect, useState } from "react";
import ServiceExampleDiv from "./ServiceExampleDiv";
import { useParams } from "react-router";

function ServiceExamples(props) {
  const [examplesList, setExamplesList] = useState([]);
  const params = useParams()

  useEffect(() => {
    if (props.data) {
      const newList = [];
      for (const key in props.data) {
        const element = props.data[key];
        const object = { [key]: element };
        newList.push(object);
      }
      setExamplesList(newList);
    }
  }, [props.data, params]);

  return (
    <div className="serviceExamples">
      {examplesList &&
        examplesList.map((x) => {
          const element = Object.entries(x);
          console.log();
          return (
            <ServiceExampleDiv
              title={element[0][1]["Name"]}
              description={element[0][1]["Description"]}
              key={element[0][1]["Name"]}
            />
          );
        })}
    </div>
  );
}

export default ServiceExamples;
