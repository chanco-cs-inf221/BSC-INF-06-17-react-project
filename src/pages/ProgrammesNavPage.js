import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../components/menuLink";

const ProgrammesNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="cubes" className="green-text" /> Programmes
            </h1>
            <ul className="list-unstyled example-components-list">
             
              <MenuLink to="/programmes/comscience" title="Computer Science (BSC/COM)" />
              <MenuLink to="/programmes/infscience" title="Information Systems (BSC/INF)" />
              <MenuLink to="/programmes/netscience" title="Networking (BSC/NET)" />
              
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProgrammesNavPage;
