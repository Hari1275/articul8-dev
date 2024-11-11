import { Metadata } from "next";
import Enterprise from "./Enterprise";
import HeavyItems from "./HeavyItems";
import ProductPage from "./Hero";
import ProductLift from "./ProductLift";
export const metadata: Metadata = {
  title: 'Articul8 | Our Platform and Products',
  description:
    'Welcome to Articul8 - The GenAI platform that brings order to chaos.',
};

const HomePage = () => {
  return (
    <div>
      <ProductPage />
      <Enterprise />
      <ProductLift />
      <HeavyItems />
    </div>
  );
};

export default HomePage;
