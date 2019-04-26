import React from "react";
import { MDBContainer,MDBRow,MDBIcon } from "mdbreact";
import DocsLink from "../components/docsLink";

const NationalNewsPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="National"
       
      />
       <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcom to news happening within our country.
                   </strong> 
                     <br></br>
                       <br></br>
                         <a
                          className="border nav-link border-light rounded mr-1"
                          href="https://mwnation.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                         >
                       <MDBIcon icon="graduation-cap" className="mr-2" />
                    National news
             </a>
          </p>
        </MDBRow>
  
    </MDBContainer>
  );
};

export default NationalNewsPage;
