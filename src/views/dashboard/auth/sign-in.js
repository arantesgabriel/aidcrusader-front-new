import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppCarouselCampaign from "../../../components/campaign-card";
import Footer from "../../../components/partials/dashboard/FooterStyle/footer";
import FooterLanding from "../../../components/partials/dashboard/FooterStyle/footer-landing";

//icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";
// Redux Selector / Action
import { useSelector } from "react-redux";

//img
// import logo from "../../../assets/images/logo-full.png";
import logo from "../../../assets/images/login/logo-line-desc.png";
import login1 from "../../../assets/images/login/1.jpg";
import login2 from "../../../assets/images/login/2.jpg";
import login3 from "../../../assets/images/login/3.jpg";
import globalCommunity from "../../../assets/images/login/global-community.svg"
import needHelp from "../../../assets/images/login/need-help.svg";
import landingBackFull from "../../../assets/images/login/landing-back-full.svg";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignIn = () => {

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
                      <p className="font-size-16 mb-0 text-white">
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
                      <p className="font-size-16 mb-0 text-white">
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
                      <p className="font-size-16 mb-0 text-white">
                        It is a long established fact that a reader will be
                        <br /> distracted by the readable content.
                      </p>
                    </SwiperSlide>
                  </ul>
                </Swiper>
              </div>
            </Col>
            <Col md={6}>
              {/*style={{
                backgroundImage: `url(${landingBack})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh' 
              }}*/}
              <div className="sign-in-from text-center">
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
                {/*<p className="mt-0 ms-3 font-size-14 p-0 fw-bold" style={{color: '#2B3990'}}>
                  Give and Receive Infinitely
                </p>*/}
                <Form className="mt-5">
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">
                      Email Address
                    </h6>
                    <Form.Control
                      type="email"
                      className="form-control mb-0"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="form-group text-start">
                    <h6 className="form-label fw-bold">Password</h6>
                    <Form.Control
                      type="password"
                      className="form-control mb-0"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Check className="form-check d-inline-block m-0">
                      <Form.Check.Input
                        type="checkbox"
                        className="form-check-input"
                      />
                      <h6 className="form-check-label fw-bold">Remember Me</h6>
                    </Form.Check>
                    <Link to="/auth/recoverpw" className="font-italic">
                      Forgot Password?
                    </Link>
                  </div>
                  {/* <Link type="button" className="btn btn-primary mt-4 fw-semibold text-uppercase w-100" to="#">sign in</Link> */}
                    <Button
                      variant="primary"
                      type="button"
                      className="btn btn-primary mt-4 fw-semibold text-uppercase w-100"
                    >
                      Sign In
                    </Button>
                  <h6 className="mt-5 rounded-3 p-2 w-100">
                    Don't Have An Account ?{" "}
                    <Link to="/auth/sign-up">Sign Up</Link>
                  </h6>
                </Form>
              </div>
              <a
                href="#landing"
                className="scroll-down-link-sign-in"
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                <KeyboardDoubleArrowDownIcon style={{ fontSize: '3rem'}}/>
              </a>

            </Col>
          </Row>
        </Container>
      </section>
      <section id="landing">
        <div id="landing-back-bg"
          className="d-flex align-items-start justify-content-start z-0"
          style={{
            backgroundImage: `url(${landingBackFull})`,
            backgroundSize: 'cover', // cobre toda a div
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh', // altura exata da tela
            width: '100%',  // largura total da viewport
            position: 'relative',
            top: 0,
            left: 0
          }}
        >
              <div className="align-items-center justify-content-center mt-5 text-center adjust-landing">
                <h2 className="fw-bold" style={{fontSize: '1.9rem', color: '#0F1432'}}>Aid Crusader: the social network that is a powerful crowdfunding tool for humanitarian aid.</h2>
                <h3 className="mt-4 fw-bold text-center" style={{fontSize: '1.5rem', color: '#0F1432'}}>Together we can make a difference.</h3>
              </div>
              <a
                href="#campaigns"
                className="scroll-down-link-landing"
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
              >
                <KeyboardDoubleArrowDownIcon style={{ fontSize: '3rem'}} />
              </a>
        </div>
      </section>
      <section id="campaigns">
        <Container fluid style={{padding: '0% 5%'}}>
        {/* GIVE AND RECEIVE */}
        <div className="giveandreceive mt-4 mb-4">Give and Receive Infinitely!</div>

        {/* CAMPAIGN CAROUSEL */}
        <AppCarouselCampaign />
  

        <div className="infoContainer mt-5">
          {/* WHY CAMPAIGN */}
          <div className="info mt-5 pt-5">
            <h2 className="title fw-bold p-0">WHY NOT USE CROWDFUNDING WITHIN A SOCIAL MEDIA NETWORK TO MEET YOUR URGENT NEEDS?</h2>
            <h2 className="sub fw-bold">Aid Crusader, the social network that is a powerful crowdfunding tool for humanitarian aid.</h2>
            <h2 className="sub fw-bold">Together we can make a difference.</h2>
          </div>

          {/* GLOBAL COMMUNITY */}
          <div className="InfoBox" role="img">
            <div className="info">
              <h4 className="title">Join a global community of engaged individuals dedicated to helping those in need.</h4>
              <p className="sub">Aid Crusader is a unique platform, created with the mission to enable anyone to contribute to important causes around the world. With our social network, you can connect with people who share the same values and goals, discover trustworthy charitable organizations, and support their fundraising campaigns.</p>
            </div>
            <img className="image" src={globalCommunity} alt="Join the global community" style={{width: '100%'}}/>
            <Link
                  to={"/auth/sign-up"}
                  className="d-inline-flex align-items-center justify-content-center gap-2 mt-3"
                >
              <Button variant="primary" color="primary" className="button-donate w-50">Become a Crusader</Button>
            </Link>
          </div>

          {/* NEED HELP */}
          <div className="InfoBox" role="img">
            <img className="image" src={needHelp} alt="Are you in need of assistance?Are you in need of assistance?" style={{width: '100%'}} />
            <div className="info">
              <h4 className="title">Are you in need of assistance?</h4>
              <h1 className="mt-3 mb-3 fw-bold">For you, for your community, or organization.</h1>
              <p className="sub">At Aid Crusader, with just a few clicks, you can start your campaign and engage with a charitable and humanitarian community that works to help people and causes around the world.</p>
            </div>
            <Link
                  to={"/auth/sign-up"}
                  className="d-inline-flex align-items-center justify-content-center gap-2 mt-3"
                >
              <Button variant="primary" color="primary" className="button-donate w-50">Become a Crusader</Button>
            </Link>
          </div>
          {/*onClick={handleOpenDialog}*/}
        </div>
      </Container>
      </section>  
      <section>
        <FooterLanding />
        <Footer />
      </section>
    </>
  );
};

export default SignIn;
