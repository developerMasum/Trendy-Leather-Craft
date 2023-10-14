import Banner from "@/components/Home/Banner";
import CategoriesPage from "@/components/Shared/Categories/Categories";
import ProductForm from "@/components/Shared/From/ProductForm";

const Home = () => {
  return (
    <main>
      <Banner />
      <ProductForm/>
      <CategoriesPage />
    </main>
  );
};
export default Home;