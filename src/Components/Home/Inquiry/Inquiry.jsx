import Container from "../../../Container/Container";
import InquryForm from "./InquryForm";

const Inquiry = () => {
  return (
    <div>
      <Container>
        <div
          className=""
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4049793/pexels-photo-4049793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="md:flex block gap-10 justify-between bg-gradient-to-r from-blue-600 to-blue-300 w-full h-full px-6 py-4  bg-opacity-40">
            <div className="space-y-2 mt-6 mb-20 md:mb-0">
              <h1 className="md:text-4xl text-xl line-clamp-2 font-bold text-white">
                An easy way to send <br />
                requests to all suppliers{" "}
              </h1>
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br></br> sed do eiusmod tempor incididunt.
              </p>
              <button className="bg-white px-6 py-2 rounded-sm font-bold">Learn more</button>
            </div>
            <div>
              <InquryForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Inquiry;
