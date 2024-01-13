import Container from "../../../../Container/Container";
import BannerCategory from "./BannerCategory";
import ProductCategory from "./ProductCategory";

const Category = () => {
  return (
    <div>
      <Container>
        <div className="flex  rounded-md bg-white ">
        <BannerCategory />
        <ProductCategory />
        </div>
      </Container>
    </div>
  );
};

export default Category;
