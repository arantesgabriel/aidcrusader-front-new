import React, { useState } from "react";

//router
import { Link } from "react-router-dom";

//react bootstrap
import { Dropdown, Button, Modal } from "react-bootstrap";

//components
import CustomToggle from "./dropdowns";

//images
import user1 from "../assets/images/user/1.jpg";
import small1 from "../assets/images/small/07.png";
import small2 from "../assets/images/small/08.png";
import small3 from "../assets/images/small/09.png";
import small4 from "../assets/images/small/10.png";
import small5 from "../assets/images/small/11.png";
import small6 from "../assets/images/small/12.png";
import small7 from "../assets/images/small/13.png";
import small8 from "../assets/images/small/14.png";
import small07 from "../assets/images/small/07.png";
import small08 from "../assets/images/small/08.png";
import small09 from "../assets/images/small/09.png";

const CreatePostNew = (props) => {
    const options = [
    {
      icon: "save",
      title: "Public",
      description: "Anyone on or off Aid Crusader"
    },
    {
      icon: "cancel",
      title: "Friends",
      description: "Your Friend on Aid Crusader"
    },
    {
      icon: "person_remove",
      title: "Friends except",
      description: "Don't show to some friends"
    },
    {
      icon: "notifications",
      title: "Only Me",
      description: "Only me"
    }
  ];

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="post-modal-data" className={`card  ${props.class}`}>
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Create Post</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="user-img">
              <img
                loading="lazy"
                src={user1}
                alt="userimg"
                className="avatar-60 rounded-circle"
              />
            </div>
            <form className="post-text ms-3 w-100 " onClick={handleShow}>
              <input
                type="text"
                className="form-control rounded"
                placeholder="Write and share your post with your friends..."
                style={{ border: "none" }}
              />
            </form>
          </div>
          <hr />
          <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap gap-3">
            <li className="bg-primary-subtle rounded pointer d-flex align-items-center">
              <Link to="#" className="add-photo rounded custom-link-color p-2 d-inline-block fw-medium text-body"><span className="material-symbols-outlined align-middle font-size-20 me-1">
                add_a_photo
              </span>{" "}
                Photo/Video
              </Link>
            </li>
            <li className="bg-primary-subtle rounded pointer d-flex align-items-center">
              <Link to="#" className="tag-friend rounded custom-link-color p-2 d-inline-block fw-medium text-body">
                <span className="material-symbols-outlined align-middle font-size-20 me-1">
                  group
                </span>{" "}
                Tag Friend
              </Link>
            </li>
            <li className="bg-primary-subtle rounded pointer d-flex align-items-center">
              <Link to="#" className="feeling rounded custom-link-color p-2 d-inline-block fw-medium text-body">
                <span className="material-symbols-outlined align-middle font-size-20 me-1">
                  sentiment_satisfied
                </span>{" "}
                Feeling/Activity
              </Link>
            </li>
            <li className="bg-primary-subtle rounded p-2 pointer text-center">
              <div className="card-header-toolbar rounded d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle as="div" id="post-option" className="lh-1">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className=" dropdown-menu-right"
                    aria-labelledby="post-option"
                  >
                    <Dropdown.Item onClick={handleShow} href="#">
                      Check in
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Live Video
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Gif
                    </Dropdown.Item>
                    {/*<Dropdown.Item onClick={handleShow} href="#">
                      Watch Party
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Play with Friend
                    </Dropdown.Item>*/}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
          </ul>
        </div>
        <Modal
          // className={`modal fade ${show ? "show" : ""}`}
          // style={{ display: show ? "block" : "none" }}
          show={show} onHide={handleClose}
          // centered
          id="custom-post-modal"
          size="lg"
          fullscreen="sm-down"
        >

          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="post-modalLabel">
              Create Post
            </h5>
            <Link to="#" className="lh-1" onClick={handleClose}>
              <span className="material-symbols-outlined">close</span>
            </Link>
          </div>
          <Modal.Body >
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img
                  loading="lazy"
                  src={user1}
                  alt="userimg"
                  className="avatar-60 rounded-circle img-fluid"
                />
              </div>
              <form className="post-text ms-3 w-100 ">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Write something here..."
                  style={{ border: "none" }}
                />
              </form>
            </div>
            <hr />
            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="add-photo rounded custom-link-color rounded p-2 d-inline-block fw-medium text-body w-100"><span className="material-symbols-outlined align-middle font-size-20 me-1">
                    add_a_photo
                  </span>{" "}
                    Photo/Video
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="tag-friend rounded custom-link-color p-2 d-inline-block fw-medium text-body w-100">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      group
                    </span>{" "}
                    Tag Friend
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="feeling rounded custom-link-color p-2 d-inline-block fw-medium text-body w-100">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      sentiment_satisfied
                    </span>{" "}
                    Feeling/Activity
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="check-in rounded custom-link-color p-2 d-inline-block fw-medium text-body w-100">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      location_on
                    </span>{" "}
                    Check in
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="video rounded custom-link-color p-2 d-inline-block fw-medium text-body w-100">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      live_tv
                    </span>{" "}
                    Live Video
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded pointer me-3">
                  <Link to="#" className="gif rounded custom-link-color p-2 d-inline-block fw-medium text-body w-100">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      gif_box
                    </span>{" "}
                    GIF
                  </Link>
                </div>
              </li>
              {/*<li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small7}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Watch Party
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small8}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Play with Friends
                </div>
              </li>*/}
            </ul>
            <hr />
            <div className="other-option">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {/*<div className="user-img me-3">
                    <img
                      loading="lazy"
                      src={user1}
                      alt="userimg"
                      className="avatar-60 rounded-circle img-fluid"
                    />
                  </div>*/}
                  <h6>Who can see your post ?</h6>
                </div>
                <div className="card-post-toolbar w-50">
                  <Dropdown className="w-100">
                    <Dropdown.Toggle
                      className="btn btn-primary d-flex align-items-center w-100"
                      role="button"
                    >
                      <span className="material-symbols-outlined">{selected.icon}</span>
                      <div className="data ms-2 text-start">
                        <h6 className="mb-0 text-white">{selected.title}</h6>
                        <small>{selected.description}</small>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu m-0 p-0 w-100">
                      {options.map((option, idx) => (
                        <Dropdown.Item
                          key={idx}
                          className="dropdown-item p-3"
                          onClick={() => setSelected(option)}
                        >
                          <div className="d-flex align-items-center">
                            <span className="material-symbols-outlined">{option.icon}</span>
                            <div className="data ms-2">
                              <h6>{option.title}</h6>
                              <span className="mb-0">{option.description}</span>
                            </div>
                          </div>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  </div>
              </div>
            </div>
            <Button variant="primary" className="d-block w-100 mt-3">
              Post
            </Button>
          </Modal.Body>

        </Modal>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : "d-none"}`}
        onClick={handleClose}
      ></div>
    </>
  );
};

export default CreatePostNew;
