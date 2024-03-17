import { useContext } from "react"
import { Link } from "react-router-dom"
import GeneralContext from "../Context/general-context"

function NavList(props) {
  
  return (
    <ul className="nav__navList">
      <li onClick={() => {props.closeModal()}}><Link to="/aboutus">OUR COMPANY</Link></li>
      <li onClick={() => {props.closeModal()}}><Link to="/locations">LOCATIONS</Link></li>
      <li onClick={() => {props.closeModal()}}><Link to="/contactus">CONTACT</Link></li>
    </ul>
  )
}

export default NavList