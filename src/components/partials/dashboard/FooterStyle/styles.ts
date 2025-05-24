import styled from "@emotion/styled";
import { Environment } from "../../../../environment";

export const ContainerPerson = styled.div`
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 80px 90px 80px 91px; */
    gap: 80px;

    width: 100%;
    padding: 20px 10px;

    background: #f4f4f4;
    margin-top: 40px;

    /* Inside auto layout */

    flex: none;
    order: 9;
    flex-grow: 0;

    @media (max-width: ${Environment.MOBILE_WIDTH}) {
        #footerText {
            display: none;
        }
    }
`

export const NavMenu = styled.nav`
    color: #000;
    > div {
        > a {
            color: #000;
        }

        > a:hover{
            text-decoration: underline;
            color: #495057!important;
        }
        > img {
            color: #000;
        }

        > svg:hover{
            text-decoration: underline;
            color: #495057!important;
        }
    }
`

export const NavFollowUs = styled.nav`
    color: #000!important;
    display: flex;
    flex-direction: column;
    align-items: left;      
    text-decoration: none!important;
    
    width: 100%;
    padding: 0px 30px;

    a{
        color: #000!important;
        text-decoration: none!important;
    }

    a:hover{
        color: #495057!important;
        text-decoration: none!important;
    }

    > div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
    }
`

export const NavBottom = styled.nav`
    color: #000;
    display: flex;
    
    align-items: center;
    gap: 24px;
    justify-content: center;
    width: 80%;
    padding: 0px 30px;
    border-top: 1px solid #000;

    > a {
        color: #000;
    }

    @media (max-width: ${Environment.MOBILE_WIDTH}) {
        flex-direction: column;
    }
`