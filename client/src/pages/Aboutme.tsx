import styled from "styled-components"
import {useTheme} from "../ThemeContext.tsx";

export const AboutmePage: React.FC = () => {
    const {theme} = useTheme();
    return (
        <Container theme={theme}>
            <h1>Meet Nathanim</h1>
            <p>
                I am a passionate software engineer experienced in full-stack development with React, Node.js, and
                MongoDB. Skilled in TypeScript, GraphQL, and PostgreSQL. Continuously learning and improving to deliver
                high-quality software solutions.
            </p>
        </Container>
    )
}




const Container = styled.div<{ theme: string }>`
    width: 100vw;
    place-items: center;
    color: ${(props) => props.theme === 'light' ? '#333' : '#fff'};
    font-size: 1.2rem;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 5rem 0;
    margin: 3rem 0;
    
    
    &:after{
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        border-bottom-left-radius: 200px;
        //background-color: ${(props) => props.theme === 'light' ? '#efeeeb' : '#555353'};
        content: '';
        
    }
    
    
    p {
        width: 70%;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        
        @media screen and (max-width: 700px){
            width: 90%;
            text-align: left;
        }
    }

    h1{
        font-family: "Satisfy", cursive;
        position: relative;
        z-index: 1;
        padding: 1rem;
    }
`
