import React from "react";
import Container from "../../../Container/Container";

const Pagination = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-2 justify-end">
          <div>
            <select className="w-full h-full px-6 py-2" name="" id="">
              <option value="">Show 10</option>
              <option value="">Show 30</option>
              <option value="">Show 50</option>
            </select>
          </div>
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pagination;
