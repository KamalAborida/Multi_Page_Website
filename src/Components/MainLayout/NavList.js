import { useContext } from "react"
import { Link } from "react-router-dom"
import GeneralContext from "../Context/general-context"

function NavList(props) {
  
  return (
    <ul className="nav__navList">
      <li onClick={() => {props.closeModal()}}><Link to="/Multi_Page_Website/aboutus">OUR COMPANY</Link></li>
      <li onClick={() => {props.closeModal()}}><Link to="/Multi_Page_Website/locations">LOCATIONS</Link></li>
      <li onClick={() => {props.closeModal()}}><Link to="/Multi_Page_Website/contactus">CONTACT</Link></li>
    </ul>
  )
}

export default NavList