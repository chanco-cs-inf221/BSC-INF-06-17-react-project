import React from "react";
import { MDBContainer,MDBRow,MDBIcon } from "mdbreact";
import DocsLink from "../components/docsLink";

const ComSciencePage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Computer Science"
     
      />
       <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcome to Bachelor of science in computer science at chancellor collage.
                   </strong> 
                     <br></br>
                       <br></br>
                         <a
                          className="border nav-link border-light rounded mr-1"
                          href="https://cs.cc.ac.mw/programmes/Bachelor_of_Science_in_Computer_Science"
                          target="_blank"
                          rel="noopener noreferrer"
                         >
                       <MDBIcon icon="graduation-cap" className="mr-2" />
                    Computer science
             </a>
          </p>
        </MDBRow>
    </MDBContainer>
  );
};

export default ComSciencePage;
