import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";
import "./HomePage.css";
const FormsNavPage = () =>  {
 
  return (
    
    <MDBContainer>

      <MDBRow id="form">
  
       
        <MDBCol md="5" className="mt-3 mx-auto" >
        
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="edit" className="green-text mr-2" />
              Registration
            </h1>
            <ul className="list-unStyled example-components-list">
              
              <MenuLink to="/forms/forms" title="Form" />
             
            </ul>
          </MDBJumbotron>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
}

export default FormsNavPage;
