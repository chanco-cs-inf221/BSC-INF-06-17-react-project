import React from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const RegStudentsPage = () => {
  return (
    <div>
    <MDBContainer className="mt-5">
      <DocsLink
        title="Registered students"
   
      />
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
}

export default RegStudentsPage;
