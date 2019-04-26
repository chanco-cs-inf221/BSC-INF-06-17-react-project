import React from "react";
import { Container, Row, Col, Jumbotron, Fa,NavLink } from "mdbreact";

class PeoplePage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
             <ul>
              <NavLink
                  className="list-group-item list-group-item-action"
                  to="/people/hover"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Registered Students
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/people/com"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    COM students
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/people/com"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    INF students
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/people/net"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    NET students
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PeoplePage;
