function AddressDiv(props) {
  return (
    <div className="addressDiv">
      <p className="addressDiv__p">
        {!props.p1 ? "Designo Central Office" : props.p1}
      </p>
      <p className="addressDiv__p">
        {!props.p2 ? "3886 Wellington Street" : props.p2}
      </p>
      <p className="addressDiv__p">
        {!props.p3 ? "Toronto, Ontario M9C 3J5" : props.p3}
      </p>
    </div>
  );
}

export default AddressDiv;
