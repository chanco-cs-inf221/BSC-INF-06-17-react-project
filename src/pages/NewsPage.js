import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../components/menuLink";

const NewsPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="bars" className="green-text mr-2" />
              News
            </h1>
            <ul className="list-unstyled example-components-list">
            
              <MenuLink to="/news/collagenews" title="Collage" />
              <MenuLink to="/news/nationalnews" title="National" />
              <MenuLink to="/news/worldnews" title="Else where" />
            
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default NewsPage;
