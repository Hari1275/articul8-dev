import Enterprise from "./Enterprise";
import HeavyItems from "./HeavyItems";
import ProductPage from "./Hero";
import ProductLift from "./ProductLift";

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
