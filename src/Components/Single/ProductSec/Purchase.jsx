import { MdVerifiedUser } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const Purchase = ({ item }) => {
  return (
    <div className=" gap-3 border-2 px-6 py-4 rounded-md space-y-4 xl:block hidden">
      <div className="flex gap-5">
        <img
          className="w-[4rem] h-[4rem] "
          src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          alt=""
        />
        <div>
          <h1>Supplier</h1>
          <p>Guanjoi Tranding LLC</p>
        </div>
      </div>
      <hr />
      <div className="list-none mt-4 ">
        <li className="flex items-center gap-3 text-xl">
          <span>
            <MdVerifiedUser />
          </span>{" "}
          <span>Verified Seller</span>
        </li>
        <li className="flex gap-3 items-center text-xl">
          <span>
            <MdVerifiedUser />
          </span>{" "}
          <span>Verified Seller</span>
        </li>
        <li className="flex gap-3 items-center text-xl">
          <span>
            <CiGlobe />
          </span>{" "}
          <span>Worldwide shipping</span>
        </li>
      </div>
      <div className="space-y-4 ">
       <div>
       <Link to="/checkout">
          <button className="bg-blue-700 px-6 py-2 text-white w-full rounded-md">
            Send Inquiry
          </button>
        </Link>
       </div>
       <div>
       <Link to="/checkout">
          <button className="bg-white border-2 text-black px-6 py-2 w-full rounded-md">
            Send Inquiry
          </button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default Purchase;
