import styled from "styled-components"

export const AboutmePage: React.FC = () => {
    return (
        <Container>
            <h1>Welcome to my Portfolio</h1>
            <p>
                I am a passionate software engineer experienced in full-stack development with React, Node.js, and MongoDB. Skilled in TypeScript, GraphQL, and PostgreSQL. Continuously learning and improving to deliver high-quality software solutions.
            </p>
        </Container>
    )
}



const Container = styled.div`
    width: 100vw;
    place-items: center;
    color: #333;
    font-size: 1.2rem;
    text-align: center;
    /* background: #efeeeb; */
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 5rem 0;
    
    
    &:after{
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        border-bottom-left-radius: 200px;
        background-color: #efeeeb;
        content: '';
        
    }
    
    
    p {
        width: 70%;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }

    h1{
        font-family: "Satisfy", cursive;
        position: relative;
        z-index: 1;
    }
`
