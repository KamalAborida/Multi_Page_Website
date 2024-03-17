function Button(props) {

  return (
    <button className={`btn ${props.color ? "btn-onDark" : "btn-onLight"}`} onClick={props.onClick}>
      {props.title}
    </button>
  )
}

export default Button