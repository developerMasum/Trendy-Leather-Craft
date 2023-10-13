// import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Slider from "./Slider";
import CollectionSlider from "@/components/Home/CollectionSlider";


  const Home =()=> {
  return (
    <main>
      <Slider />
      <Collection />
      <CollectionSlider></CollectionSlider>
    </main>
  );
}
export default Home;