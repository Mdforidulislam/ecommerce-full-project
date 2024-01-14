import { RiHeartAddLine } from "react-icons/ri";

const LayoutFour = ({item}) => {
    return (
        <div className="  items-center h-full bg-white border-2 px-5  py-3">
        <div>
          <img className="md:w-[18rem] w-[12rem] h-[8rem] md:h-[12rem]" src={item.image[0]} alt="" />
        </div>
        <div className="h-full items-btween">
          <div>
            <h1>{item.name}</h1>
            <div>
              <span>{item.discountPrice}</span>
              <span>{item.regularPrice}</span>
            </div>
            <div>
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <h1>Order 16</h1>
              </div>
              <div>
                <h1>{item.customization ? "free shipping" : "paid shipping"}</h1>
                <RiHeartAddLine />
              </div>
            </div>
            <p>{item.description}</p>
          </div>
          <div>
            <span>View Details</span>
          </div>
        </div>
      </div>
    );
};

export default LayoutFour;