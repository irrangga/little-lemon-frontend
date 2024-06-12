import Home from "./Home/Home"
import { Routes, Route } from "react-router-dom"

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Main