import { Routes, Route, useLocation } from "react-router-dom"
import { Direct } from "../pages/Direct"
import { Explore } from "../pages/Explore"
import { Home } from "../pages/Home"
import { User } from "../pages/User"

export const Routers = () => {
  const location = useLocation()
  const background = location.state && location.state.background
  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user" element={<User />} />
        <Route path="/p/:id"/>
      </Routes>
      {background && (
        <Routes>
          <Route path="/p/:id"/>
        </Routes>
      )}
    </div>
  )
}