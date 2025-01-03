import { Helmet } from "react-helmet-async"
import MenuList from "../component/MenuList/MenuList"

export default function OurMenuPage() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <MenuList />
    </div>
  )
}
