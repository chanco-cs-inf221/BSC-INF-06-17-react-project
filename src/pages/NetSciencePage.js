import React from "react";
import {MDBContainer,MDBRow,MDBIcon } from "mdbreact";
import DocsLink from "../components/docsLink";

const NetSciencePage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Networking"
       
      />
        <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcome to Bachelor of Science in Network Engineering at Chancellor Collage.
                   </strong> 
                     <br></br>
                       <br></br>
                         <a
                          className="border nav-link border-light rounded mr-1"
                          href="https://cs.cc.ac.mw/programmes/Bachelor_of_Science_in_Computer_Network_Engineering"
                          target="_blank"
                          rel="noopener noreferrer"
                         >
                       <MDBIcon icon="graduation-cap" className="mr-2" />
                    Network Engineering
             </a>
          </p>
        </MDBRow>
     
    </MDBContainer>
  );
}

export default NetSciencePage;
