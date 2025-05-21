import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'react-bootstrap'
import { Grid, useMediaQuery } from "@mui/material";
import { ContainerPerson, NavFollowUs, NavMenu } from "./styles";
import { Environment } from "../../../../environment";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppLogoStack from "../../../../assets/images/login/logo-stack.svg";
import AppLogoLine  from "../../../../assets/images/login/logo-line.png";


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

    const isMobile = useMediaQuery(`(max-width:${Environment.MOBILE_WIDTH})`);

    //const handleFollowUs = (media: string) => window.open(`${media}`, "_blank");
    return (
        <>
        <ContainerPerson>
            <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ px: 2, py: 4 }} // padding horizontal no container
            >
            {/* Coluna da esquerda - 5/12 */}
            <Grid item xs={12} md={4}>
                {isMobile ? (
                <img src={AppLogoLine} className="d-block" style={{ maxWidth: '100%', height: 'auto' }} />
                ) : (
                <img src={AppLogoStack} style={{ maxWidth: '100%', height: 'auto' }} />
                )}

                <p id="footerText" className="w-75 pt-3">
                The Social Networking Platform that unites technology with philanthropy
                to create a powerful humanitarian aid tool.
                </p>
            </Grid>

            {/* Coluna do meio - 3/12 */}
            <Grid
                item
                xs={12}
                md={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={3}
            >
                <NavMenu>
                    <p></p>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/membership">Membership</Link></div>
                    <div><Link to="/multi-interface">Multi-Interface</Link></div>
                    <div><Link to="/scoreboards">Scoreboards</Link></div>
                    <div><Link to="/hypermarket">Hypermarket</Link></div>
                    <div><Link to="/career">Work With Us</Link></div>
                </NavMenu>
            </Grid>

            {/* Coluna da direita - 4/12 */}
            <Grid
                item
                xs={12}
                md={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={3}
            >
                <NavFollowUs>
                <p><strong>Follow Us</strong></p>

                <a
                    href="https://www.facebook.com/aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />&nbsp;Facebook
                </a>
                <a
                    href="https://www.instagram.com/aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />&nbsp;Instagram
                </a>
                <a
                    href="https://twitter.com/aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon />&nbsp;Twitter
                </a>
                <a
                    href="https://www.linkedin.com/company/aid-crusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />&nbsp;Linkedin
                </a>
                <a
                    href="https://www.youtube.com/@aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <YouTubeIcon />&nbsp;YouTube
                </a>
                </NavFollowUs>
            </Grid>
            </Grid>
        </ContainerPerson>
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
                            Copyright 2025 <Link to="/" className='mx-1'>Aid Crusader</Link>All Rights Reserved.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default (Footer)