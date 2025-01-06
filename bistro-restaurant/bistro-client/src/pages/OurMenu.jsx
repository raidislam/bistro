import { Helmet } from "react-helmet-async";
import bannerImage from "../assets/menu/banner3.jpg";
import MenuList from "../component/MenuList/MenuList";
import BannerTitle from "../component/Shared/BannerTitle";
import HeroBanner from "../component/Shared/HeroBanner";
export default function OurMenuPage() {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <section>
        <HeroBanner bannerImage={bannerImage}>
          <BannerTitle
            title="OUR MENU"
            subtitle="Would you like to try a dish?"
          />
        </HeroBanner>
      </section>
      <MenuList />
    </>
  );
}
