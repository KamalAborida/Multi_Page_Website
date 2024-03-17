import InputDiv from "../Re-Usable/InptDiv";
import Button from "../Re-Usable/Button";


function ContactUsForm() {
  return (
    <form className="contactUsForm">
      <InputDiv placeHolder="Name"/>
      <InputDiv placeHolder="Email Address"/>
      <InputDiv placeHolder="Phone"/>
      <InputDiv placeHolder="Message" type="textArea"/>
      <Button title="Submit" color="btn-onDark"/>
    </form>
  )
}

export default ContactUsForm