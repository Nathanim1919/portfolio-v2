import styled from "styled-components";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ProjectFile from '../projects.json';




export const WorksPage: React.FC = () => {
    return (
        <Container>
            <div className="content-header">
                <h2>Latest Projects</h2>
                <a href={'https://www.github.com/Nathanim1919'}><FaGithub/>Github</a>
            </div>
            <div className="works">
                {/*<div className="project1">*/}
                {/*    <div className="image">*/}
                {/*        <img*/}
                {/*            src="https://img.freepik.com/free-photo/dating-app-interface-smartphone_23-2149374755.jpg?t=st=1722783943~exp=1722787543~hmac=e4ef90369f91ae590e4783639ce8092ef7ddf3caa92dbd246a62ecb7f5001fcc&w=900"*/}
                {/*            alt="project1"/>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        <h3>FinanceVision</h3>*/}
                {/*        <p>FinanceVision is a personal finance management app that helps you track your income and*/}
                {/*            expenses. It also provides a dashboard to visualize your financial data.</p>*/}
                {/*        <div className="techStacks">*/}
                {/*            <span>React</span>*/}
                {/*            <span>Node</span>*/}
                {/*            <span>Express</span>*/}
                {/*        </div>*/}
                {/*        <div className="actions">*/}
                {/*            <button><MdLiveTv/>Live Preview</button>*/}
                {/*            <button><FaCode/>Source Code</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {ProjectFile?.map((project, index) => (
                    <div className="project1" key={index}>
                        <div className="image">
                            <img src={project.image} alt={project.title}/>
                        </div>
                        <div className="content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="techStacks">
                                {project.tech.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                            <div className="actions">
                                <button><MdLiveTv/>Live Preview</button>
                                <button><FaCode/>Source Code</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
};


const Container = styled.div`
    display: grid;
    width: 100%;
    margin: 3rem auto;
    position: relative;

    > * {
        position: relative;
        z-index: 1;
        width: 80%;
        margin: auto;
    }


    &:after {
        content: '';
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #efeeeb;
        top: 0;
        border-bottom-right-radius: 200px;
        padding: 5rem 0;
    }


    .content-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Satisfy", cursive;

        a {
            display: flex;
            align-items: center;
            gap: .5rem;
            text-decoration: none;
            color: #333;
            border: 1px solid #858282;
            padding: .2rem .4rem;
            border-radius: 5px;


            &:hover {
                background-color: #333;
                color: #fff;
            }
        }

    }

    .works {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
        grid-template-rows: 1fr min-content;
        gap: 1rem;
        row-gap: 4rem;
        margin-top: 3rem;

        .project1 {
            display: grid;
            grid-template-columns: 1fr;
            transition: transform 0.5s;
            border-radius: 5px;
            cursor: pointer;
            height: 100%;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            background-color: #e9e2e2;


            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 16/9;
                position: relative;
                top: -2rem;
                transition: all 0.2s;


                img {
                    width: 90%;
                    height: 100%;
                    border-radius: 10px;
                    transition: top 0.5s;
                    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
                }
            }

            .content {
                display: flex;
                flex-direction: column;
                gap: 7px;
                overflow: hidden;

                > * {
                    margin: 0;
                }

                h3 {
                    font-size: 2rem;
                    font-weight: bold;
                    font-family: "Satisfy", cursive;
                    padding: 0 10px;
                }

                p {
                    font-size: .8rem;
                    padding: 0 10px;
                    color: #333;
                }

                .techStacks {
                    display: flex;
                    padding: 0 10px;
                    flex-wrap: wrap;
                    gap: 5px;

                    span {
                        padding: 3px 10px;
                        margin-right: 5px;
                        background-color: #eee;
                        color: #333;
                        border-radius: 5px;
                        font-family: "Satisfy", cursive;
                    }
                }

                .actions {
                    padding: 10px 0;
                    display: flex;
                    justify-content: space-around;
                    margin-top: 10px;
                    border-top: 1px solid #cdc8c8;

                    button {
                        padding: .5rem;
                        border-radius: 5px;
                        background-color: #333;
                        color: #fff;
                        cursor: pointer;
                        font-family: "Satisfy", cursive;
                        display: flex;
                        align-items: center;
                        gap: .5rem;
                        font-size: 1rem;
                        border: 1px solid transparent;

                        &:hover {
                            background-color: transparent;
                            border: 1px solid #979494;
                            color: #333;
                        }
                    }

                    button:nth-child(2) {
                        background-color: transparent;
                        border: 1px solid #979494;
                        color: #333;

                        &:hover {
                            background-color: #333;
                            border: 1px solid #737171;
                            color: #fff;
                        }
                    }
                }
            }
        }
`
