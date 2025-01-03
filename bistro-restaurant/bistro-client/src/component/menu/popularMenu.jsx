import { useEffect, useState } from "react"
import SectionTitle from "../sectionTitle/SectionTitle"
import MenuItem from "../Shared/MenuItem"

export default function PopularMenu() {
  const [populerMenu, setPopulerMenu] = useState([])
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerData = data?.filter((item) => item.category === "popular")
        setPopulerMenu(populerData)
      })
  }, [])

  return (
    <section className="w-[1320px]">
      <SectionTitle
        subheading={"---Check it out---"}
        mainheading={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-2 gap-4">
        {populerMenu.map((item, index) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <button className="btn">View Full Menu</button>
    </section>
  )
}
