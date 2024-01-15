import CheckoutBtn from "../Components/CheckOut/CheckoutBtn";
import Coupon from "../Components/CheckOut/Coupon";
import Product from "../Components/CheckOut/Product";
import RelatedProduc from "../Components/CheckOut/RelatedProduc";
import Container from "../Container/Container";

const CheckOut = () => {
    return (
        <div>
            <Container>
                 <div className="md:px-6 px-3">
                    <div>
                    <h1>My Card 3</h1>
                    </div>
                    <div className="lg:flex block space-y-4 justify-between w-full gap-6">
                        <div className="flex-1 ">
                           <Product  />
                        </div>
                        <div >
                            <Coupon/>
                        <CheckoutBtn/>
                        </div>
                    </div>
                    <div className="mt-6">
                        <RelatedProduc/>
                    </div>
                 </div>
            </Container>
        </div>
    );
};

export default CheckOut;