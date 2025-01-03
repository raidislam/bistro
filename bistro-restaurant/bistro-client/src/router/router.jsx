import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import HomePage from "../pages/Home"
import Contact from "../component/Contact/Contact"
import Dashboard from "../component/Dashboard/Dashboard"
import Shop from "../component/Shop/Shop"
import OurMenuPage from "../pages/OurMenu"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <OurMenuPage></OurMenuPage>,
      },
      {
        path: "contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "our-shop",
        element: <Shop />,
      },
    ],
  },
])
