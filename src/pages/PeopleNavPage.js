import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../components/menuLink";

const PeoplePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mx-auto">
          <MDBJumbotron className="mt-3">
            <h1>
              <MDBIcon icon="css3" brand className="green-text" /> People
            </h1>
            <ul className="list-unstyled example-components-list">
             
              <MenuLink to="/people/stuff" title="Stuff members" />
              <MenuLink to="/people/regStudents" title="Registered members" />
              <MenuLink to="/people/com" title="COM students" />
              <MenuLink to="/people/inf" title="INf students" />
              <MenuLink to="/people/net" title="NET students"  />
              
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PeoplePage;
