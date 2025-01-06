import { Helmet } from "react-helmet-async";
import bannerImage from "../assets/shop/banner2.jpg";
import BannerTitle from "../component/Shared/BannerTitle";
import HeroBanner from "../component/Shared/HeroBanner";
export default function OurShopPage() {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <section>
        <HeroBanner bannerImage={bannerImage}>
          <BannerTitle
            title="OUR SHOP"
            subtitle="Would you like to try a dish?"
          />
        </HeroBanner>
      </section>
    </>
  );
}
