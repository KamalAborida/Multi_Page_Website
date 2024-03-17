import { errorSvg } from "../../Assets/contact/desktop/icon-error";

function InptDiv(props) {
  return (
    <div className={`inptDiv ${props.isError ? "inptDiv-error" : ""}`}>
      {props.type !== "textArea" && <input placeHolder={props.placeHolder} type={props.type || "text"} />}
      {props.type === "textArea" && <textarea placeHolder={props.placeHolder}></textarea>}
      {props.isError && (
        <p className="inptDiv-errorState">Can't be empty {errorSvg}</p>
      )}
    </div>
  );
}

export default InptDiv;
