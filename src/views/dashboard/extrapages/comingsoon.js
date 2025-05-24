import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

//image
import logo from "../../../assets/images/login/logo-line-desc.png";
import comingSoon from "../../../assets/images/coming-soon/coming-soon.png";

const ComingSoon = () => {
  return (
    <>
      <div className="iq-comingsoon mt-5 mt-lg-0">
        <Container>
          <div className="auto-vh-100 d-flex flex-column justify-content-center">
            <Row className="justify-content-center">
              <Col md="8" className="text-center">
                <div className="iq-comingsoon-info">
                  <Link
                    className="d-flex justify-content-center align-items-center gap-2 iq-header-logo d-none d-lg-flex"
                    to="/"
                  >
                    <img
                      src={logo}
                      style={{width: '300px'}}
                      className="signin-img img-fluid mb-0 rounded-3"
                      alt="images"
                    />
                  </Link>
                  <h2 className="mt-4 mb-1">
                    Stay tunned, we're launching very soon
                  </h2>
                  <p>
                    We are working very hard to give you the best experience
                    possible!
                  </p>
                  <img
                      src={comingSoon}
                      style={{width: '100vh'}}
                      className="signin-img img-fluid mb-0 rounded-3"
                      alt="images"
                    />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="6" md="7" className="text-center">
                    <Link
                          to={"/"}
                          className="d-inline-flex align-items-center justify-content-center gap-2"
                        >
                      <Button variant="primary" color="primary" className="button-donate w-50">Back</Button>
                    </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ComingSoon;
