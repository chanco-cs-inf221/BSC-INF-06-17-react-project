import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../components/menuLink";

const MatrialsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="code" className="green-text" /> Matrials
            </h1>
            <ul className="list-unstyled example-components-list">
             
              
              <MenuLink to="/matrials/Books" title="Books" />
              <MenuLink to="/matrials/tools" title="Tools" />
              <MenuLink to="/matrials/others" title="Other matrials" />
              
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MatrialsNavPage;
