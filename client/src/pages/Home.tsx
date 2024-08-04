import styled from "styled-components";


export const HomePage: React.FC = () => {
  return (
    <Home>
      <div className="header">
        <h1>NT</h1>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Works</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h3>Hello, I'm</h3>
        <h1>Nathanim Tadele</h1>
        <h2>a Software Engineer</h2>
        <div className="more">
          <p>Would you like to learn more about me?</p>
          <button>Download my CV</button>
        </div>
      </div>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #333;
  display: grid;
  align-items: center;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background-attachment: fixed;

  &:before {
    content: "";
    background-color: #efeeeb;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 35%;
    border-right: 1px solid #e5dfdf;
    border-bottom-right-radius: 300px;
  }

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10%;
    font-family: "Satisfy", cursive;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #333;
    }
    .nav {
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
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
      font-family: "Satisfy", cursive;
    }

    .more {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      font-family: "Satisfy", cursive;
      flex-direction: column;
      button {
        background-color: #333;
        color: #fff;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .more {
  }
`;
