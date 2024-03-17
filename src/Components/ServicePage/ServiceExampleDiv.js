import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function ServiceExampleDiv(props) {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const loadImg = setTimeout(() => {
      let serviceName = params.service
        .toLowerCase()
        .split("")
        .map((char) => (char === " " ? "-" : char))
        .join("");

      let serviceExampleTitle = props.title
        .toLowerCase()
        .split("")
        .map((char) => (char === " " ? "-" : char))
        .join("");

      let img = require(`../../Assets/${serviceName}/desktop/image-${serviceExampleTitle}.jpg`);

      setImgSrc(img);
    }, 10); // Delay in milliseconds

    return () => clearTimeout(loadImg); // Cleanup function to clear the timeout
  }, [params.service, props.title]);

  return (
    <div className="serviceExampleDiv">
      {imgSrc ? (
        <img
          className="serviceExampleDiv__img"
          src={imgSrc}
          alt={props.title}
        />
      ) : (
        <div className="serviceExampleDiv__placeholder">Loading...</div>
      )}
      <div className="serviceExampleDiv__descriptionDiv">
        <h2 className="serviceExampleDiv__descriptionDiv__title">
          {props.title.toUpperCase()}
        </h2>
        <p className="serviceExampleDiv__descriptionDiv__description">{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceExampleDiv;
