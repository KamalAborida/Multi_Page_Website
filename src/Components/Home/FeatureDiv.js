function FeatureDiv(props) {
  return (
    <div className="featureDiv featuresCollection__featureDiv">
      <img className="featureDiv__img" src={props.img} alt={props.title} />
      <h2 className="featureDiv__title">{props.title}</h2>
      <p className="featureDiv__p">{props.p}</p>
    </div>
  );
}

export default FeatureDiv;
