function PhoneMailDiv(props) {
  return (
    <div className="phoneMailDiv">
      <p className="phoneMailDiv__p">
        {!props.p1 ? "Contact Us (Central Office)" : props.p1}
      </p>
      <p className="phoneMailDiv__p">
        {!props.p2 ? "P : +1 253-863-8967" : props.p2}
      </p>
      <p className="phoneMailDiv__p">
        {!props.p3 ? "M : contact@designo.co" : props.p3}
      </p>
    </div>
  );
}

export default PhoneMailDiv;
