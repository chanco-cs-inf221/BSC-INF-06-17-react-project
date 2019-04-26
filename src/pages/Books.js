import React from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const Books = () => {
  return (
    <div>
      <MDBContainer className="mt-5 text-center"
      
      >
        <DocsLink title="Books" />
        <p className=" text-center font-weight-bold">
        OPPS!!<br></br>
        NO DATA
      </p>
      <p className="text-center font-weight-bold">
        "To be continued.."
      </p>
      </MDBContainer>

     
      </div>
  );
};

export default Books;