import React from "react";
import "./footer.css";
// import logo from "../../assets/images/eco-logo.png";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="8">
            <div className="logo text-white">
              {/* <img src={logo} alt="logo" /> */}
              <i class="fa-solid fa-shop"></i>
              <div>
                <h1 className="text-white">
                  Shopyfy.{" "}
                  <span
                    style={{
                      fontFamily: "Ovo",
                      color: "gray",
                      fontWeight: "100",
                      fontSize: "14px",
                    }}
                  >
                    Since-1997
                  </span>
                </h1>
              </div>
            </div>
            <p className="footerPara mt-4">
              The footer may include sections highlighting featured products,
              best sellers, recent blog posts, or customer reviews to encourage
              further exploration and increase sales.
            </p>
            <Col lg="4">
              <div className="footerSocialIcon">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
            </Col>
          </Col>

          <Col lg="3">
            <div className="footerLinks">
              <h4 className="linksTitle">Top Category</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footerLinks">
              <h4 className="linksTitle">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy & Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footerLinks">
              <h4 className="linksTitle">Contact</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="footerIcon text-white">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <p>12/9957,12B street Sydney,Australia.</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="footerIcon text-white">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <p>+991-99904521950</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="footerIcon text-white">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <p>shopyfy1997sydney@mail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footerCopyRight">
              Copyrights {year} developed by Shopyfy. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
