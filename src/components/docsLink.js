import React from "react";
import { MDBRow, MDBIcon } from "mdbreact";

const DocsLink = props => {
  return (
    <>
      <MDBRow className="align-items-center mt-5">
        <h4 className="grey-text" style={{ margin: "0px" }}>
          <strong>{props.title}</strong>
        </h4>
        <href
          className=" green-text px-1 "
          target="_blank"
          
        >
          <MDBIcon icon="graduation-cap" className="mr-2" />
          
        </href>
      </MDBRow>
      <hr className="mb-5" />
    </>
  );
};

export default DocsLink;
