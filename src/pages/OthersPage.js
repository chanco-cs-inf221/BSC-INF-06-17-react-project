import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

class OthersPage extends Component {

  

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Other matrials"
         
        />
       
       <p className=" text-center font-weight-bold">
        OPPS!!<br></br>
        NO DATA
      </p>
      <p className="text-center font-weight-bold">
        "To be continued.."
      </p>
      </MDBContainer>
    );
  }
}

export default OthersPage;
