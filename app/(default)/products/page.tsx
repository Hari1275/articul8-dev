import { Metadata } from "next";
import Enterprise from "./Enterprise";
import HeavyItems from "./HeavyItems";
import ProductPage from "./Hero";
import ProductLift from "./ProductLift";
import { getProductPageData } from "../../../utils/strapi";

export const metadata: Metadata = {
  title: 'Articul8 | Our Platform and Products',
  description:
    'Welcome to Articul8 - The GenAI platform that brings order to chaos.',
};

const HomePage = async () => {
  const productData = await getProductPageData();

  return (
    <div>
      <ProductPage heroData={productData.data.HeroSection} />
      <Enterprise productWorksData={productData.data.ProductWorksSection} />
      <ProductLift productLiftData={productData.data.ProductLiftingSection} />
      <HeavyItems productPlansData={productData.data.ProductPlansSection} />
    </div>
  );
};

export default HomePage;
