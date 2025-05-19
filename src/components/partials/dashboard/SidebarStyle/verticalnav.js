import React, { useState, useEffect, useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { Accordion, useAccordionButton, AccordionContext, Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

import campaignsFeedLight from "../../../../assets/images/svgs/campaigns-feed-light.svg";
import campaignsFeedDark from "../../../../assets/images/svgs/campaign-feed-dark (1).svg";

function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const VerticalNav = React.memo(() => {
    const [currentTheme, setCurrentTheme] = useState('light')
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    let location = useLocation();

    const checkTheme = () => {
        const isDarkThemeByDataAttr = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        const isDarkTheme = isDarkThemeByDataAttr;
        
        setCurrentTheme(isDarkTheme ? 'dark' : 'light');
    };

    useEffect(() => {
        checkTheme();
        
        const htmlObserver = new MutationObserver(checkTheme);
        htmlObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-bs-theme']
        });
        
        return () => {
            htmlObserver.disconnect();
        };
    }, []);

    return (
        <React.Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Main</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Newsfeed</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                newspaper
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Newsfeed</span>
                    </Link>
                </li>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/friend-request' ? 'active' : ''} nav-link`} to="/dashboard/app/friend-request">
                        <i className="icon material-symbols-outlined filled">
                            people
                        </i>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Friend Request</Tooltip>}>
                            <i className="sidenav-mini-icon"> FR </i>
                        </OverlayTrigger>
                        <span className="item-name">Friend Request</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/groups' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/groups">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Campaign Feed</Tooltip>}>
                            <i className="icon">
                                <img
                                    src={currentTheme === "dark" ? campaignsFeedDark : campaignsFeedLight}
                                    alt="Campaign Feed"
                                    style={{ width: "17.5px" }}
                                />
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Campaign Feed</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/extrapages/blankpage' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/blankpage">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Create Campaign</Tooltip>}>
                            <i className="icon material-symbols-outlined fs-4">
                                volunteer_activism
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Create Campaign</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/extrapages/notifications' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/notifications">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Email</Tooltip>}>
                            <i className="icon material-symbols-outlined fs-4">
                                mail
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Email</span>
                    </Link>
                </Nav.Item>
            </Accordion>
        </React.Fragment >
    )
})

export default VerticalNav