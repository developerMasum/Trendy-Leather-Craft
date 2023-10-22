// import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Slider from "./Slider";
import PopularCategory from "@/components/Home/PopularCategory";
import CategoriesPage from "@/components/Categories/Categories";
import CollectionSlider from "@/components/Home/Collection/WinterCollection";

const Home = () => {
  return (
    <main>
      <Slider />
      <Collection />
      <CollectionSlider />
      <PopularCategory />
      <CategoriesPage />
    </main>
  );
};
export default Home;
