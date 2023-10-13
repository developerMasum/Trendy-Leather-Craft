// import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Slider from "./Slider";
import PopularCategory from "@/components/Home/PopularCategory";
import CategoriesPage from "@/components/Categories/Categories";



  const Home =()=> {
  return (
    <main>
      <Slider />
      <Collection />
      <PopularCategory  />
      <CategoriesPage />
    </main>
  );
}
export default Home;