import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <p>I'm Nathanim Tadele, A full Stack Developer</p>
                    <SocialMedias>
                        <FaGithub/>
                        <FaLinkedin/>
                        <FaTwitter/>
                    </SocialMedias>
                </FooterText>
                <ContactMe>
                    <p>
                        <MdEmail/>
                        nathanim2tadele@gmail.com
                    </p>
                    <p>
                        <FaPhoneAlt/>
                        +251-942581962
                    </p>
                </ContactMe>
            </FooterContent>
            <FooterEnd>
                <p>Made with <FaHeart/> by Nathanim Tadele | &copy; {new Date().getFullYear()}</p>
            </FooterEnd>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #333;
    color: #fff;
    padding-top: 10rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
`

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 20px;

    @media screen and (max-width: 700px){
      flex-direction: column;
    }
`

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        margin-bottom: 10px;
    }
`

const SocialMedias = styled.div`
    display: flex;
    gap: 10px;
    font-size: 1.5rem;
    
    >*{
        cursor: pointer;
        color: #fff;
        
        &:hover {
            color: #c4c2c2;
        }
    
    }
`

const ContactMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

const FooterEnd = styled.div`
    width: 80%;
    border-top: 1px solid #fff;
    padding-top: 10px;

    p {
        display: flex;
        align-items: center;
        gap: 5px;

        @media screen and (max-width: 700px)  {
            flex-direction: column;
        }
    }
`
