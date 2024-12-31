import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import HomePage from "../pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
])