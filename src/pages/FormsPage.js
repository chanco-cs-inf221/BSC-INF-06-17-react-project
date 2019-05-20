import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "./../components/docsLink";
import comsoc from "./comsoc.jpg";


class FormsPage extends Component {
  state = {
    First_Name: "",
    Last_Name: "",
    Sex: "",
    RegNumber: "",
    Program: "",
    Position: ""

  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

render() {

     return (
      <MDBContainer>
          
        <DocsLink
         title="REGISTRATION " 
        
         />
       <h2 className="mb-5"></h2>
       <MDBRow className="mt-6">
          <MDBCol md="">
          <div className="text-center"><img
              alt="comsoc"
              
              src={comsoc}
              style={{ height: '8rem', width: '8.5rem', top:'10rem'  }}
            /></div>
            <br></br>
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    First name
                  </label>
                  <input
                    value={this.state.First_Name}
                    name="First_Name"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Last name
                  </label>
                  <input
                    value={this.state.Last_Name}
                    name="Last_Name"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Sex
                  </label>
                  <input
                    value={this.state.Sex}
                    name="Sex"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Sex"
                    required
                  />
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </MDBRow>
              <MDBRow>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Registration Number
                  </label>
                  <input
                    value={this.state.RegNumber}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="RegNumber"
                    placeholder="RegNumber"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid Reg. Number.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Program
                  </label>
                  <input
                    value={this.state.Program}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="Program"
                    placeholder="Program"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid Program.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                   Position
                  </label>
                  <input
                    value={this.state.Position}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="Position"
                    placeholder="Position"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid Position in COMSOC.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </MDBRow>
              <br></br>
              <div className="text-center">
              <button className="btn btn-small text-color blue text-white" type="submit">
                Submit Form
              </button>
              </div>
            </form>
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
 }

export default FormsPage;
