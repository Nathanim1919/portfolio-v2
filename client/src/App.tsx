import { HomePage } from "./pages/Home"
import './App.css'
import { WorksPage } from "./pages/Works"
import { AboutmePage } from "./pages/Aboutme"
import {Footer} from "./pages/Footer.tsx";
import styled from "styled-components";
import {useTheme} from "./ThemeContext.tsx";
function App() {
    const {theme} = useTheme();
  return (
    <Container theme={theme}>
      <HomePage/>
      <AboutmePage/>
      <WorksPage/>
        <Footer/>
    </Container>
  )
}

export default App



const Container = styled.div<{theme: string}>`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    color: #333;
    display: grid;
    align-items: center;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    background-attachment: fixed;
    background-color: ${props => props.theme === 'light' ? '#e1e0dd' : '#333'};
    transition: background-color 0.5s;
    &:before {
        content: "";
        background-color: ${props => props.theme === 'light' ? '#efeeeb' : '#333'};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    `



