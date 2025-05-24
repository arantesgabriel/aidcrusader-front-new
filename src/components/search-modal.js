import React, { Fragment, useState } from 'react';
import { Dropdown, Form, Modal } from 'react-bootstrap';

// images

import user1 from "../assets/images/page-img/19.jpg";
import user2 from "../assets/images/page-img/18.jpg";
import user3 from "../assets/images/page-img/20.jpg";
import user4 from "../assets/images/user/06.jpg";
import user5 from "../assets/images/user/08.jpg";
import user6 from "../assets/images/user/15.jpg";
import user7 from "../assets/images/user/13.jpg";
import { Link } from 'react-router-dom';

const SearchModal = ({ searchTerm }) => {
        const initialUsers = [
        {
        id: 1,
        name: "Paige Turner",
        username: "Paige001",
        status: "online",
        avatar: user1,
        },
        {
        id: 2,
        name: "Monty Carlo",
        username: "Carlo.m",
        status: "online",
        avatar: user2,
        },
        {
        id: 3,
        name: "Paul Molive",
        username: "Paul.45",
        status: "offline",
        avatar: user3,
        },
    ];

    const [users, setUsers] = useState(initialUsers);

    const clearAllResults = () => {
        setUsers([]);
        console.log('ok')
    };

    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };


    const initialSuggestions = [
        {
        id: 1,
        name: "Annette Black",
        followedBy: "Followed by Jerome_bell + 2 more",
        avatar: user4,
        },
        {
        id: 2,
        name: "Ellyse Perry",
        followedBy: "Followed by _@rina",
        avatar: user5,
        },
        {
        id: 3,
        name: "Pete Sariya",
        followedBy: "Followed by chris_18 + 5 more",
        avatar: user6,
        },
        {
        id: 4,
        name: "Aman Verma",
        followedBy: "Followed by Jerome_bell and _@rina",
        avatar: user7,
        },
    ];

    const [suggestions, setSuggestions] = useState(initialSuggestions);

    const removeSuggestion = (id) => {
        setSuggestions(suggestions.filter((s) => s.id !== id));
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes((searchTerm || "").toLowerCase())
    );

    return (
        <Fragment>
            <Dropdown.Menu bsPrefix=' ' className={`search-modal-custom`} >

                <div className="search-modal-content">
                    <div className="px-3 py-2">
                        <div className="d-lg-none w-100">
                            <Form
                                action="#"
                                className="searchbox"
                            >
                                <Link className="search-link" to="/">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                        <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>

                                <Form.Control
                                    type="text"
                                    className="text search-input bg-primary-subtle"
                                    placeholder="Search here..."
                                />
                            </Form>
                        </div>
                        {/* <Modal.Title> */}
                        <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
                            <h4
                                className="modal-title"
                                id="exampleModalFullscreenLabel"
                            >
                                Recent
                            </h4>

                            <Link to="#" onClick={clearAllResults} className="text-dark">
                                Clear All
                            </Link>
                        </div>
                        {/* </Modal.Title> */}
                    </div>
                    <Modal.Body className=" p-0">
                        <div className="item-header-scroll">
                            <div className="search-modal-body">
                                <div className="d-flex d-lg-none align-items-center justify-content-between w-100 p-3 pb-0">
                                <h5 className="modal-title h4" id="exampleModalFullscreenLabel">
                                Recent
                                </h5>
                                <Link to="#" onClick={clearAllResults} className="text-dark">
                                Clear All
                                </Link>
                            </div>

                            {filteredUsers.map((user) => (
                                <div
                                key={user.id}
                                className="d-flex align-items-center search-hover py-2 px-3"
                                >
                                <div className="flex-shrink-0">
                                    <img
                                    src={user.avatar}
                                    className="align-self-center img-fluid avatar-50 rounded-pill"
                                    alt={user.name}
                                    />
                                </div>
                                <div className="d-flex ms-3 w-100 justify-content-between">
                                    <div className="d-flex flex-column">
                                    <div>
                                        <Link to="#" className="h6">
                                        {user.name}
                                        </Link>
                                        <span
                                        className={
                                            user.status === "online"
                                            ? "profile-status-online"
                                            : "profile-status-offline"
                                        }
                                        ></span>
                                    </div>
                                    <span className="mb-0">{user.username}</span>
                                    </div>
                                    <Link
                                    to="#"
                                    onClick={() => removeUser(user.id)}
                                    className="material-symbols-outlined text-dark font-size-16"
                                    >
                                    close
                                    </Link>
                                </div>
                                </div>
                            ))}
                                <div className="py-2 px-3">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalFullscreenLabel"
                                    >
                                        Suggestion
                                    </h5>
                                </div>
                                {suggestions.map((profile) => (
                                    <div
                                    key={profile.id}
                                    className="d-flex align-items-center search-hover py-2 px-3"
                                    >
                                    <div className="flex-shrink-0">
                                        <img
                                        src={profile.avatar}
                                        className="align-self-center img-fluid avatar-50 rounded-pill"
                                        alt={profile.name}
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                        <Link to="#" className="h6">
                                            {profile.name}
                                        </Link>
                                        <span>{profile.followedBy}</span>
                                        </div>
                                        <Link
                                        to="#"
                                        onClick={() => removeSuggestion(profile.id)}
                                        className="material-symbols-outlined text-dark font-size-16"
                                        >
                                        close
                                        </Link>
                                    </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Dropdown.Menu>
        </Fragment>
    )
}

export default SearchModal