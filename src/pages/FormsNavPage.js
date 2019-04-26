import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const FormsNavPage = () =>  {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="edit" className="green-text mr-2" />
              Regstration
            </h1>
            <ul className="list-unstyled example-components-list">
              
              <MenuLink to="/forms/forms" title="Form" />
             
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormsNavPage;
