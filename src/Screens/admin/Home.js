import React, { useState } from "react";
import { Button, Col, Container, Modal, Row, Nav, Tab } from "react-bootstrap";
import ButtonMain from "../../Component/Button";
import NavbarComponent from "../../Component/Navbar";
import "../../Assets/Styling/adminHome.css";
import tab1 from "../../Assets/images/categories.png";
import tab2 from "../../Assets/images/activity.png";
import tab3 from "../../Assets/images/playlist.png";
import tab4 from "../../Assets/images/report.png";
import uploadIcon from "../../Assets/images/uploadicon.png";
import Nutrition from "../../Assets/images/Nutrition.png";
import menu from "../../Assets/images/Menu.png";
import deleteImg from "../../Assets/images/delete.png";
import pencil from "../../Assets/images/pencil.png";

function Home() {
  const [show, setShow] = useState(false);
  const [fromCount, setFromCount] = useState(50);
  const [toCount, setToCount] = useState(50);
  const [showDefault, setShowDefault] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showReporting, setShowReporting] = useState(false);
  const [showItemOption, setShowItemOption] = useState(false);

  const addCatHandle = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleItemHover = () => {
    setShowItemOption(true);
  }
  const handleItemHoverLeave = () => {
    setShowItemOption(false);
  }



  return (
    <div className="adminHome">

      <NavbarComponent />
      <div className="home-outer">
        {/* <div className="sidenav-outer"> */}
        {/* <Row className="sidenavTabs">
            <Col
              onClick={() => {
                setShowCategory(true);
              }}
              className="tab"
            >
              <div className="tab-inner">
                <img src={tab1}></img>

                <h4>Categories</h4>
              </div>
            </Col>
            <Col onClick={() => setShowActivity(true)} className="tab">
              <div className="tab-inner">
                <img src={tab2}></img>
                <h4>Activity</h4>
              </div>
            </Col>
            <Col onClick={() => setShowPlaylist(true)} className="tab">
              <div className="tab-inner">
                <img src={tab3}></img>
                <h4>Playlist</h4>
              </div>
            </Col>
            <Col onClick={() => setShowReporting(true)} className="tab">
              <div className="tab-inner">
                <img src={tab4}></img>
                <h4>Reporting</h4>
              </div>
            </Col>
          </Row> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="outer-row">
            <Col className="sidenav-outer" style={{ paddingTop: "4em" }}>
              <Nav variant="pills" className="flex-column tab-outer">
                <Nav.Item className="tab navItem">
                  <img src={tab1}></img>
                  <Nav.Link className="navLink" eventKey="first">
                    Categories
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="tab navItem">
                  <img src={tab2}></img>
                  <Nav.Link className="navLink" eventKey="second">
                    Activity
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="tab navItem">
                  <img src={tab3}></img>
                  <Nav.Link className="navLink" eventKey="third">
                    Playlist
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="tab navItem">
                  <img src={tab4}></img>
                  <Nav.Link className="navLink" eventKey="forth">
                    Reporting
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col style={{backgroundColor: "#F2F4F6"}} sm={9}>
              {showDefault ? (
                <div className="defaultTab">
                  <p>Please add Categories first</p>
                </div>
              ) : (
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="category-outer">
                      <div className="category">
                        <button onClick={addCatHandle} className="categoryBtn">
                          Add Category
                        </button>
                      </div>

                      <Modal show={show} onHide={handleClose}>
                        <div className="modelMain">
                          {/* <Modal.Header closeButton>
                              <Modal.Title></Modal.Title>
                           </Modal.Header> */}
                          <Modal.Body className="modelBody">
                            <div className="catName">
                              <label>Category Name:</label>
                              <input
                                className="catInput"
                                placeholder="Type Category Name Here"
                              ></input>
                            </div>
                            <div className="uploadImg">
                              <label>Upload Image</label>
                              <div className="upload-outer">
                                <input
                                  className="catInput inputFile"
                                  type="file"
                                ></input>
                                <img
                                  className="uploadIcon"
                                  src={uploadIcon}
                                  alt="upload"
                                />
                              </div>
                            </div>
                            <div className="ageGroup">
                              <label>Age Group: </label>
                              <div className="ageGroup-inner">
                                <p>From</p>
                                <div className="agegroupBtn-outer">
                                  <button
                                    className="agegroupBtn"
                                    onClick={() => setFromCount(fromCount + 1)}
                                  >
                                    +
                                  </button>
                                  {fromCount}
                                  <button
                                    className="agegroupBtn"
                                    onClick={() => setFromCount(fromCount - 1)}
                                  >
                                    -
                                  </button>
                                </div>
                                <p>To</p>
                                <div className="agegroupBtn-outer">
                                  <button
                                    className="agegroupBtn"
                                    onClick={() => setToCount(toCount + 1)}
                                  >
                                    +
                                  </button>
                                  {toCount}
                                  <button
                                    className="agegroupBtn"
                                    onClick={() => setToCount(toCount - 1)}
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modelFooter">
                              <button
                                className="mainButton modelBtn"
                                variant="secondary"
                                onClick={handleClose}
                              >
                                Cancel
                              </button>
                              <button
                                className="mainButton modelBtn"
                                style={{
                                  backgroundColor: "#AA23AD",
                                  color: "#F2F4F6",
                                }}
                                variant="primary"
                                onClick={handleClose}
                              >
                                Save
                              </button>
                            </div>
                          </Modal.Body>
                          {/* <Modal.Footer></Modal.Footer> */}
                        </div>
                      </Modal>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="activity-outer">
                      <CatItem itemOptions={showItemOption} itemHover={handleItemHover} itemHoverLeave={handleItemHoverLeave} />
                      <CatItem />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              )}
            </Col>
          </Row>
        </Tab.Container>
        {/* </div> */}
      </div>
    </div>
  );
}

const CatItem = (props) => {
  const { itemOptions, itemHover, itemHoverLeave } = props
  return (
    <div onMouseEnter={itemHover} onMouseLeave={itemHoverLeave} className="catItem">
      {itemOptions && (
        <div className="itemOptions">
          <img src={pencil} alt="pencil" />Edit
          <img src={deleteImg} alt="delete" />Delete
        </div>
      )}
      <div className="menu"></div>
      {/* <img className="catitemImg" src={Nutrition} alt="catItem" /> */}
      <p className="catitemName">Category Name</p>
    </div>
  )
}


export default Home;
