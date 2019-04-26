import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer,MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink,MDBNavbarBrand } from "mdbreact";
import "./HomePage.css";
import students from "./students.png";
import chanco1 from "./chanco1.ico";


class HomePage extends React.Component {
  render() {
    return (
      <div>
        
        <MDBEdgeHeader className="color green"  >
        <img
              alt="students"
              
              src={students}
              style={{ height: "100%", width: "100%" }}
            /> 
          
      </MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
          <MDBCol
            md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <MDBCardBody>
                <p className="text-color indigo white-text">
                <h2 className="h2-responsive mb-4 text-center">
                <img
              alt="chanco1"
              
              src={chanco1}
              style={{ height: "100px", width: "15%" }}
            /> <br></br>
                  <strong >COMSOC website</strong>
                </h2>
                <p
                 className="text-center">Welcome to Chancellor Collage Computer Science Society</p>
                <p className="pb-4 text-center">
                  The society for all Programming courses
                  
                  </p>
                </p>
                
                <MDBRow className="d-flex flex-row justify-content-center row">
                  <a
                    className=" border nav-link border-light rounded mr-1"
                    href="https://cs.cc.ac.mw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon icon="graduation-cap" className="mr-2" />
                   <bold>Official site </bold>
                  </a>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
        <MDBContainer>
        {/*<img
              alt="pic1"
              
              src={pic1}
              style={{ height: "100%", width: "100%" }}
        /> */}
          <MDBRow>
            <MDBCol md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
                Why COMSOC?
              </h2>
              <p className="text-center font-weight-bold brown-text">
                The society aims at helping students from Programming related courses
                 in different aspects conserning Programming.
  
              </p>
              <p className="text-center font-weight-bold brown-text">
                The collage introduced COMSOC to support you in different problems faced
                 from your different Programming courses.
              </p>
              <p className="text-center font-weight-bold brown-text">
                Now we are presenting you with the COMSOC website with all import components 
                and features at galance. 
    
              </p>
              <p className="text-center font-weight-bold brown-text">
              NAVIGATE AROUND AND HAVE FUN!
              </p>
              
              
              <hr className="my-5"/>
              
              
              
              
              <MDBRow id="categories">
              <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="css3" brand className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right" height="15px">
                    <h4 className="font-weight-bold">PEOPLE</h4>
                    <p className="grey-text">
                      Contains COMSOC staff members, COMSOC regsterd members, all bsc/com, 
                      bsc/inf and bsc/net <br></br> students.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white" 
                      to="people"
                    >
                      People
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="cubes" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">PROGRAMMES</h4>
                    <p className="grey-text">
                     Contains regsterd members from bsc/com, bsc/inf and bsc/net 
                     and more information for those courses.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white"
                      to="/programmes"
                    >
                      Programmes
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="code" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="4" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MATRIALS</h4>
                    <p className="grey-text">
                      Advanced  coding materials such as books, lessons, coding tools
                      and other materials. All in Material Design version.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white" 
                      to="matrials"
                    >
                      Materials
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="bars" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NEWS</h4>
                    <p className="grey-text">
                      Real time technological news from the collage, within the nation 
                      and around the grabal.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white"
                      to="/news"
                    >
                      News
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="edit" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right" height="10px">
                    <h4 className="font-weight-bold">REGISTRATION</h4>
                    <p className="grey-text">
                     Be a regsterd COMSOC member and ejoy all its evnts and 
                     be an advanced student.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white"
                      to="/forms"
                    >
                      Register
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="table" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">EVENTS</h4>
                    <p className="grey-text height-2x">
                      COMSOC events,<br></br> programs and <br></br>activities                              
                               
                                
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo text-white" 
                      to="tables"
                    >
                      Events
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
