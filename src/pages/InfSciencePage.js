import React from "react";
import { MDBContainer,MDBRow,MDBIcon } from "mdbreact";
import DocsLink from "../components/docsLink";

const InfSciencePage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Information Systems"
       
      />
        <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcome to Bachelor of science in Information Systems at Chancellor Collage.
                   </strong> 
                     <br></br>
                       <br></br>
                         <a
                          className="border nav-link border-light rounded mr-1"
                          href="https://cs.cc.ac.mw/programmes/Bachelor_of_Science_in_Information_Systems"
                          target="_blank"
                          rel="noopener noreferrer"
                         >
                       <MDBIcon icon="graduation-cap" className="mr-2" />
                    Information Systems
             </a>
          </p>
        </MDBRow>
     
    </MDBContainer>
  );
};

export default InfSciencePage;
