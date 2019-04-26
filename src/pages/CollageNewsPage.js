import React, { Component } from "react";
import { MDBContainer, MDBIcon,MDBRow } from "mdbreact";
import DocsLink from "../components/docsLink";

class CollageNewsPage extends Component {
  

  render() {
    return (
      <MDBContainer>
        <DocsLink
        title="Collage"
      
        />
           <MDBRow className="d-flex flex-row justify-content-center row">
             <p className="text-center">
                <strong>Welcome to chancellor collage news.</strong> <br></br><br></br>
                  <a
                    className="border nav-link border-light rounded mr-1"
                    href="https://www.cc.ac.mw/news"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon icon="graduation-cap" className="mr-2" />
                    Chanco News
             </a>
          </p>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CollageNewsPage;
