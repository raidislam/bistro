import { Helmet } from "react-helmet-async"
import Home from "../component/Home"

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Home />
    </>
  )
}
