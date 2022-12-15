import { Routes, Route, useLocation } from "react-router-dom"
import { OpenModal } from "../components/Modal"
import { Direct } from "../pages/Direct"
import { Explore } from "../pages/Explore"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export const Routers = () => {
  const location = useLocation()
  const background = location.state && location.state.background
  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="direct" element={<Direct />} />
        <Route path="explore" element={<Explore />} />
        <Route path="profile" element={<Profile />} />
        <Route path="p/:idPost" element={<OpenModal />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="p/:idPost" element={<OpenModal />} />
        </Routes>
      )}
    </div>
  )
}