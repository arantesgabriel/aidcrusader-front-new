import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

//img
// import logo from "../../../assets/images/logo-full.png";
import login1 from "../../../assets/images/login/1.jpg";
import login2 from "../../../assets/images/login/2.jpg";
import login3 from "../../../assets/images/login/3.jpg";
import logo from "../../../assets/images/login/logo-line-desc.png"

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";
// Redux Selector / Action
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignUp = () => {
  const appName = useSelector(SettingSelector.app_name);

  return (
    <>
      <section className="sign-in-page">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="overflow-hidden position-relative" >
              <div className="bg-light-blue w-100 h-100 position-absolute top-0 bottom-0 start-0 end-0"></div>
              <div className="container-inside z-1 justify-content-center">
                <div className="main-circle circle-small"></div>
                <div className="main-circle circle-medium"></div>
                <div className="main-circle circle-large"></div>
                <div className="main-circle circle-xlarge"></div>
                <div className="main-circle circle-xxlarge"></div>
              </div>
              <div className="sign-in-detail container-inside-top">
                <Swiper
                  className="list-inline m-0 p-0 "
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  <ul className="swiper-wrapper list-inline m-0 p-0">
                    <SwiperSlide>
                      <img
                        src={login1}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 fw-bold text-white">
                        Power UP Your Friendship
                      </h2>
                      <p className="font-size-16 mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={login2}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 fw-bold text-white">
                        Connect with the world
                      </h2>
                      <p className="font-size-16 mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={login3}
                        className="signin-img img-fluid mb-5 rounded-3"
                        alt="images"
                      />
                      <h2 className="mb-3 fw-bold text-white">
                        Together Is better
                      </h2>
                      <p className="font-size-16 mb-0">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                  </ul>
                </Swiper>
              </div>
            </Col>
            <Col md={6}>
              <div className="sign-in-from text-center mt-0">
                <Link
                  to="/"
                  className="d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <img
                        src={logo}
                        style={{width: '300px'}}
                        className="signin-img img-fluid mb-0 rounded-3"
                        alt="images"
                      />
                </Link>
                {/*<p className="mt-0 ms-3 font-size-14 p-0 fw-bold blue-aid">
                  Give and Receive Infinitely
                </p>*/}
                <Form className="mt-5">
                  {/* First Name + Last Name */}
                  <Form.Group className="form-group text-start">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="form-label fw-bold">First Name</h6>
                        <Form.Control
                          type="text"
                          className="form-control mb-3"
                          placeholder="Your First Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <h6 className="form-label fw-bold">Last Name</h6>
                        <Form.Control
                          type="text"
                          className="form-control mb-3"
                          placeholder="Your Last Name"
                        />
                      </div>
                    </div>
                  </Form.Group>

                  {/* Tag Name */}
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Tag Name</h6>
                    <Form.Control
                      type="text"
                      className="form-control mb-3"
                      placeholder="Tag Name"
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Email Address</h6>
                    <Form.Control
                      type="email"
                      className="form-control mb-3"
                      placeholder="email@example.com"
                    />
                  </Form.Group>

                  {/* Password + Confirm Password */}
                  <Form.Group className="form-group text-start">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="form-label fw-bold">Password</h6>
                        <Form.Control
                          type="password"
                          className="form-control mb-3"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-6">
                        <h6 className="form-label fw-bold">Confirm Password</h6>
                        <Form.Control
                          type="password"
                          className="form-control mb-3"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </Form.Group>

                  {/* Terms */}
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Check className="form-check d-inline-block m-0">
                      <Form.Check.Input
                        type="checkbox"
                        className="form-check-input"
                      />
                      <h6 className="form-check-label fw-500 font-size-14">
                        I accept{" "}
                        <Link className="fw-light ms-1" to="/dashboard/extrapages/terms-of-service">
                          Terms and Conditions
                        </Link>
                      </h6>
                    </Form.Check>
                  </div>

                  {/* Submit */}
                  <Button
                    variant="primary"
                    type="button"
                    className="btn btn-primary mt-4 fw-semibold text-uppercase w-100"
                  >
                    Sign Up
                  </Button>

                  {/* Login Link */}
                  <h6 className="mt-5">
                    Already Have An Account?{" "}
                    <Link to={"/auth/sign-in"}>Login</Link>
                  </h6>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
