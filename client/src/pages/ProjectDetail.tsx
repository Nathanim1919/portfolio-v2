import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { FaHandPointRight } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { MdLiveTv } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import {useTheme} from "../ThemeContext.tsx";


type ProjectDetailProps = {
    project: any;
    setProjectDetail: (project: any) => void;
};


export const ProjectDetail: React.FC<ProjectDetailProps> = ({project, setProjectDetail}) => {
    const {theme} = useTheme();
    return (
        <Container project={project} className={'project-detail'} theme={theme}>
            <div className="project-image">
                <div className={"closeIcon"} onClick={()=>setProjectDetail(null)}>
                    <IoArrowBackSharp/>
                </div>
                <Header>
                    <h1><GrProjects/>{project.title}</h1>
                    <p>{project.description}</p>
                    <p><CiCalendarDate/>{project.date}</p>
                </Header>
            </div>
            <div className="project-info">
               <div className={"links"}>
                          <div className={"generalInfo"}>
                                <h3><IoIosInformationCircleOutline/>General Info</h3>
                              <div className={"info"}>
                                  <span><TbPointFilled/>{project.category}</span>
                                  <span><TbPointFilled/>{project.status}</span>
                                  <span><TbPointFilled/>{project.type}</span>
                              </div>
                          </div>
                       <div className={"teckstack"}>
                             <h3><GrTechnology/>Tech Stacks</h3>
                              <div>
                                {project.tech.map((tech: string, index: number) => (
                                     <span key={index}>{tech}</span>
                                ))}
                              </div>
                    </div>
                   <div className={"projectLinks"}>
                          <h3>Links</h3>
                       <div>
                            <a href={project.github} target={"_blank"}><FiGithub/>Github</a>
                            <a href={project.demo} target={"_blank"}><MdLiveTv/>Demo</a>
                       </div>
                   </div>
               </div>
                <div className={"story"}>
                    <div>
                        <h3><FaHandPointRight/>responsibilities</h3>
                        <p>{project.responsibilities}</p>
                    </div>

                    <div>
                        <h3><FaHandPointRight/>challenges</h3>
                        <p>{project.challenges}</p>
                    </div>

                    <div>
                        <h3><FaHandPointRight/>learned</h3>
                        <p>{project.learned}</p>
                    </div>

                    <div>
                        <h3><FaHandPointRight/>improvements</h3>
                        <p>{project.improvements}</p>
                    </div>

                    <div>
                        <h3><FaHandPointRight/>feedback</h3>
                        <p>{project.feedback}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
};

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    h1 {
        font-size: 2rem;
        color: white;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    p {
        font-size: 1rem;
        color: white;
        margin:0;
    }
`


interface ContainerProps {
    project: any;
    theme: string;
}

const Container = styled.div<ContainerProps>`
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(51, 51, 51, 0.9)'};
    backdrop-filter: blur(5px);
    overflow: hidden;
    margin: auto;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: SlideInUp 0.5s ease;
    padding-bottom: 2rem;

    @media screen and (max-width: 900px) {
        width: 100vw;
        overflow: auto;
    }


    @keyframes SlideInUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    .project-image {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, rgba(51, 51, 51, 0.81), rgba(51, 51, 51, 0.25)), url(${props => props.project.image});
        background-size: cover;
        background-position: center;

        .closeIcon {
            position: absolute;
            top: 10px;
            left: 10px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    }

    .project-info {
        width: 100%;
        height: 79%;
        display: grid;
        grid-template-columns: .4fr .6fr;
        justify-content: space-around;
        overflow: hidden;
        padding: 20px;

        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
            overflow-y: auto;

        }

        .links {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            height: 100%;
            overflow-y: auto;
            gap: 1rem;

            @media screen and (max-width: 900px) {
                overflow: hidden;
            }

            .generalInfo {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                h3 {
                    background-color: #eee;
                    padding: .4rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    width: 100%;
                }


                .info {
                    display: flex;
                    gap: 10px;
                }

                span {
                    padding: 5px 10px;
                    border: 1px solid #ffd283;
                    color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                    border-radius: 5px;
                    font-family: "Satisfy", cursive;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }

            .teckstack {
                h3 {
                    background-color: ${props => props.theme === 'light' ? '#eee' : '#333'};
                    padding: .4rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                }

                > div {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;

                    span {
                        padding: 5px 10px;
                        border: 1px solid #ffd283;
                        color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                        border-radius: 5px;
                        //font-family: "Satisfy", cursive;
                    }
                }
            }
        }

        .projectLinks {
            h3 {
                background-color: ${props => props.theme === 'light' ? '#eee' : '#333'};
                padding: .4rem 1rem;
                display: flex;
                align-items: center;
                gap: .5rem;
            }

            > div {
                display: flex;
                gap: 1rem;

                a {
                    padding: 5px 10px;
                    border: 1px solid #ffd283;
                    color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                    border-radius: 5px;
                    font-family: "Satisfy", cursive;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    &:hover {
                        background-color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                        color: ${props => props.theme === 'light' ? '#fff' : '#333'};
                    }
                }
            }

            .story {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                height: 100%;
                overflow-y: auto;


                @media screen and (max-width: 900px) {
                    overflow: hidden;
                }

                > * {
                    margin: 5px 0;
                    border: 1px solid #dbd8d6;
                    width: 90%;
                    padding: 20px 10px;
                    color: ${props => props.theme === 'light' ? '#333' : '#fff'};


                    h3 {
                        font-size: 1.2rem;
                        font-weight: bold;
                        font-family: "Satisfy", cursive;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 0 10px;
                        margin: 0 0 1rem;
                        color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                    }

                    p {
                        font-size: 1rem;
                        color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                        margin: 0;
                        padding: 0 30px;
                    }
                }
            //}
        }
`
