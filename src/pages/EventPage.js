import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "../components/menuLink";

const EventPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="table" className="green-text mr-2" />
              Events
            </h1>
            <ul className="list-unstyled example-components-list">
            
              <MenuLink to="/event/events" title="Events" />
        
              <MenuLink to="/event/programs" title="Programs" />
              
              <MenuLink to="/event/activities" title="Activities" />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default EventPage;
