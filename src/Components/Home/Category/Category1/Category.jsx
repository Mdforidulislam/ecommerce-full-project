import Container from "../../../../Container/Container";
import BannerCategory from "./BannerCategory";
import ProductCategory from "./ProductCategory";

const Category = () => {
  return (
    <div>
      <Container>
        <BannerCategory />
        <ProductCategory />
      </Container>
    </div>
  );
};

export default Category;
