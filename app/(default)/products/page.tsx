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
<<<<<<< HEAD
=======

>>>>>>> 55da6a9ebe37198a203291e9c5bb93cbd087d657
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
