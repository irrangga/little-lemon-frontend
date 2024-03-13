import LogoIcon from "../images/Logo.svg"
import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <img src={LogoIcon} alt="Little Lemon Logo" />
      <Nav />
    </>
  )
}

export default Header