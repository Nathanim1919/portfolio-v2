import styled from "styled-components";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import {useTheme} from "../ThemeContext.tsx";

export const HomePage: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <Home theme={theme}>
      <div className="header">
        <h1>NT</h1>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Works</li>
          </ul>
          <div onClick={toggleTheme}>
            {theme==='light'?<MdNightlight/>:<FaSun/>}
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Hello, I'm</h3>
        <h1>Nathanim Tadele</h1>
        <h2>a Software Engineer</h2>
        <div className='socialMedias'>
          <a href={'https://www.linkedin.com/in/nathanim-tadele-762099247/'} target={'_blank'}><CiLinkedin/></a>
          <a href={'https://github.com/Nathanim1919'} target={'_blank'}><FiGithub/></a>
          <FaXTwitter/>
        </div>
        <div className="more">
          <p>Would you like to learn more about me?</p>
          <a href={'https://drive.google.com/file/d/1mfqQa0VWwCyurmLJAdazIteAkX-5GcOe/view?usp=sharing'} target={'_blank'}>View my CV</a>
        </div>
      </div>
    </Home>
  );
};

interface HomeProps {
    theme: string;
}

const Home = styled.div<HomeProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  color: ${(props) => props.theme === 'light' ? '#333' : '#fff'};
  display: grid;
  align-items: center;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background-attachment: fixed;

  &:before {
    content: "";
    background-color: ${(props) => props.theme === 'light' ? '#efeeeb' : '#555353'};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 35%;
    border-bottom-right-radius: 300px;
    
    
    @media screen and (max-width: 700px){
       width: 50%;
    }
  }

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Satisfy", cursive;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 100;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme === 'light' ? '#333' : '#fff'};
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4rem;
      
      div{
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s;
      }
      ul {
        display: flex;
        list-style: none;

        li {
          margin-right: 1rem;
          font-size: 1.5rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }

  .content {
    position: relative;
    z-index: 1;
    left: 20%;
    display: flex;
    flex-direction: column;
    line-height: 1;

    .socialMedias {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2rem;
      margin-top: 2rem;


      > * {
        cursor: pointer;
        color: ${(props) => props.theme === 'light' ? '#333' : '#fff'};
        


        &:hover {
          color: #c4c2c2;
        }
      }
    }

    > * {
      margin: 0;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      font-family: "Satisfy", cursive;
    }

    h1 {
      font-size: 5rem;
      font-weight: 700;
      @media screen and (max-width: 700px){
        font-size:  3rem;
      }
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
      font-family: "Satisfy", cursive;

      @media screen and (max-width: 700px){
        font-size:  2rem;
      }
    }

    .more {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      font-family: "Satisfy", cursive;
      flex-direction: column;
      

      @media screen and (max-width: 700px){
        display: block;
      }

      a {
        background-color: ${(props) => props.theme === 'light' ? '#333' : '#fff'};
        color: ${(props) => props.theme === 'light' ? '#fff' : '#333'};
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Satisfy", cursive;
      }
    }
  }
`;
