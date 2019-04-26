import React from "react";
import { MDBContainer,MDBIcon,MDBRow } from "mdbreact";
import DocsLink from "../components/docsLink";

const WorldNewsPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Else where"
         />
             <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcome to news around the world concerning technolog.
                   </strong> 
                     <br></br>
                       <br></br>
                         <a
                          className="border nav-link border-light rounded mr-1"
                          href="https://www.bbc.com/news/technology"
                          target="_blank"
                          rel="noopener noreferrer"
                         >
                       <MDBIcon icon="graduation-cap" className="mr-2" />
                    World news
             </a>
          </p>
        </MDBRow>
    </MDBContainer>
  );
}

export default WorldNewsPage;
