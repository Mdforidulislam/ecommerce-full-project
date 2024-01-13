import { MdOutlineMailOutline } from "react-icons/md";
import Container from "../../Container/Container";

const Subscribe = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center py-10 ">
          <div className="space-y-4">
            <div className="justify-center text-center">
              <h1 className="text-center text-xl">
                Subscribe on our newsletter
              </h1>
              <p className="text-center">
                Get daily news on upcoming offers from many suppliers all over
                the world
              </p>
            </div>
            <div className="flex justify-center items-center">
              <form
                action=""
                className=" md:flex block gap-6 space-y-2 justify-center items-center h-full w-full"
              >
                <div className="flex gap-4 items-center h-full border  px-5 bg-white rounded-md">
                  <span>
                    <MdOutlineMailOutline className="text-2xl" />
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="focus:outline-none px-6 md:py-3 py-2  bg-transparent"
                  />
                </div>
                <button className="bg-blue-700 px-6 py-3 rounded-lg flex justify-center w-full md:w-[100px] h-full text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
