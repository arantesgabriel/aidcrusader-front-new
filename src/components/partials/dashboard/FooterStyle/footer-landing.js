import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, useMediaQuery } from "@mui/material";
import { ContainerPerson, NavFollowUs, NavMenu } from "./styles";
import { Environment } from "../../../../environment";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiTiktok } from "react-icons/si";
import truth_social from "./truth_social_icon.svg";
import AppLogoStack from "../../../../assets/images/login/logo-stack.svg";
import AppLogoLine  from "../../../../assets/images/login/logo-line-desc.png";


const FooterLanding = (props) => {
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
                    <div><Link to="/extra-pages/pages-comingsoon">About</Link></div>
                    <div><Link to="/extra-pages/pages-comingsoon">Membership</Link></div>
                    <div><Link to="/extra-pages/pages-comingsoon">Multi-Interface</Link></div>
                    <div><Link to="/extra-pages/pages-comingsoon">Infinite Crusader Board (ICB)</Link></div>
                    <div><Link to="/extra-pages/pages-comingsoon">Crusader Campaigns</Link></div>
                    <div><Link to="/extra-pages/pages-comingsoon">Work With Us</Link></div>
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
                    href="https://www.facebook.com/aidcrusader/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />&nbsp;Facebook
                </a>
                <a
                    href="https://www.instagram.com/aidcrusader/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />&nbsp;Instagram
                </a>
                <a
                    href="https://x.com/aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <XIcon/>&nbsp;X
                </a>
                <a
                    href="https://www.linkedin.com/company/91351620/admin/dashboard/"
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
                <a
                    href="https://www.tiktok.com/@aidcrusader"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTiktok style={{ width: 20, height: 20, marginRight:2}}/> TikTok
                </a>
                <a href="https://truthsocial.com/@crusaderfounder" target="_blank" rel="noopener noreferrer">
                    <img
                    src={truth_social}
                    className="truth-icon"
                    style={{ width: 20, height: 20, marginRight:2}}
                    />

                    Truth Social
                </a>

                </NavFollowUs>
            </Grid>
            </Grid>
        </ContainerPerson>
        </>
    )
}

export default (FooterLanding)