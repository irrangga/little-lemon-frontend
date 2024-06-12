import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home/Home'
import Reservations from './Reservations/Reservations'

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/order-online">Order Online</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Nav