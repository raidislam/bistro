import { Outlet } from "react-router"
import Footer from "../component/Shared/Footer"
import Header from "../component/Shared/Header"

export default function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
