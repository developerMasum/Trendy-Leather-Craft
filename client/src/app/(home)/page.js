// import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Slider from "./Slider";
import PopularCategory from "@/components/Home/PopularCategory";
import CategoriesPage from "@/components/Categories/Categories";
import Advertise from "@/components/Home/Advertise";



  const Home =()=> {
  return (
    <main>
      <Slider />
      <Collection />
      <PopularCategory  />
      <CategoriesPage />
      <Advertise />
    </main>
  );
}
export default Home;