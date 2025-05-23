import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'react-bootstrap'


const Footer = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('dark');
    if (mode !== null) {
        document.body.classList = ''
        switch (mode) {
            case "true":
                document.body.classList = 'dark'
                break;
            case "false":
                document.body.classList = ''
                break;
            default:
                document.body.classList = ''
                break;
        }
    }

    //const handleFollowUs = (media: string) => window.open(`${media}`, "_blank");
    return (
        <>
            <footer className="iq-footer p-0">
                <Container fluid className="mt-0 px-5" style={{backgroundColor: '#DFE1EE'}}>
                    <Row className='fw-bold px-5'>
                        <Col lg="6">
                            <ul className="list-inline w-100 mb-0">
                                <li className="list-inline-item"><Link to="/dashboard/extrapages/privacy-policy">Privacy Policy</Link></li>{' '}
                                <li className="list-inline-item ms-3 ms-md-5"><Link to="/dashboard/extrapages/terms-of-service">Terms of Use</Link></li>
                            </ul>
                        </Col>
                        <Col lg="6" className="d-flex justify-content-end">
                            <span style={{color: '#7E8B9A'}}>Copyright 2025 <Link to="/" className='mx-1'>Aid Crusader</Link>All Rights Reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default (Footer)