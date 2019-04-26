import React from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const InfPage = () => {
  return (
    <>
      <MDBContainer className="mt-5 text-center">
        <DocsLink title="INF students"  />
       
      </MDBContainer>

      <p className=" text-center font-weight-bold">
        OPPS!!<br></br>
        NO DATA
      </p>
      <p className="text-center font-weight-bold">
        "To be continued.."
      </p>
    </>
  );
};

export default InfPage;
