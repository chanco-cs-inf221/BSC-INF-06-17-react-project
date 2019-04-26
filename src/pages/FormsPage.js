import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import DocsLink from "./../components/docsLink";

class FormsPage extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      
      <MDBContainer className="mt-5">
        <DocsLink
          title="Form"
      
        />
        
       
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Full name"
                      icon="user green-text"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Sex"
                      icon="user green-text"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Date of birth"
                      icon="envelope green-text"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Registration number"
                      icon="envelope green-text"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your Reg.number"
                      icon="exclamation-triangle green-text"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    
                    <MDBInput
                      label="Your password"
                      icon="lock green-text"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="lock green-text"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="indigo" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        </MDBRow>
      
      </MDBContainer>
    
    );
  }
}

export default FormsPage;
