import React from "react";
import {
  Col,
  Container,
  InputGroup,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import logo from "../Assets/images/Logo.png";
import "../Assets/Styling/navbar.css";


function NavbarComponent() {
  return (
    <div className="navbar-outer">
      {/* <Row>
        <Col>
          <img src={logo} alt="logo"></img>
        </Col>
        <Col>
          <input className="input" placeholder="Search here..."></input>
        </Col>
        <Col>
          <div className="slideMenuBtn"></div>
        </Col>
      </Row> */}

      <Navbar expand={false}>
        <Container fluid>
          <img src={logo} alt="logo"></img>

          {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
          <div>
            <input
              className="input"
              style={{ marginRight: "4em" }}
              placeholder="Search here..."
            ></input>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            {/* <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header> */}
            <Offcanvas.Body>
              {/* <SideNavTabs /> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

// const SideNavTabs = (props) => {
//   return (
//     <Row className="sidenavTabs">
//       <Col className="tab">
//         <div className="tab-inner">
//           <img src={tab1}></img>

//           <h4>Categories</h4>
//         </div>
//       </Col>
//       <Col className="tab">
//         <div className="tab-inner">
//           <img src={tab2}></img>
//           <h4>Activity</h4>
//         </div>
//       </Col>
//       <Col className="tab">
//         <div className="tab-inner">
//           <img src={tab3}></img>
//           <h4>Playlist</h4>
//         </div>
//       </Col>
//       <Col className="tab">
//         <div className="tab-inner">
//           <img src={tab4}></img>
//           <h4>Reporting</h4>
//         </div>
//       </Col>
//     </Row>
//   );
// };

export default NavbarComponent;
