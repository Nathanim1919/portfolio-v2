import styled from "styled-components";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ProjectFile from '../projects.json';
import {useEffect, useState} from "react";
import {ProjectDetail} from "./ProjectDetail.tsx";




export const WorksPage: React.FC = () => {
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [projects, setProjects] = useState(ProjectFile);
    const [selectedProject, setSelectedProject] = useState<any>();

    const addFilterTags = (tag: string) => {
        if(filterTags.includes(tag)){
            setFilterTags(filterTags.filter((t) => t !== tag));
        }else{
            setFilterTags([...filterTags, tag])
        }
    }

    useEffect(() => {
        const filteredProjects = ProjectFile.filter((project) => {
            return project.tech.some((tech) => filterTags.includes(tech));
        });

        if(filterTags.length === 0) {
            setProjects(ProjectFile);
        } else {
            setProjects(filteredProjects);
        }
    }, [filterTags]);

    const isTagActive = (tag: string) => {
        return filterTags.includes(tag);
    }

    const changeInnerTextOnHovering = (tag: string) => {
        if(isTagActive(tag)){
            return "Remove";
        }else{
            return "Add";
        }
    }

    return (
        <>
        {selectedProject && <ProjectDetail project={selectedProject}/>}
        <Container>
            <div className="content-header">
                <h2>Latest Projects</h2>
                <a href={'https://www.github.com/Nathanim1919'} target={'_blank'}><FaGithub/>Github</a>
            </div>
            <div className={'filterTags'}>
                {filterTags.map((tag, index) => (
                    <span onClick={()=>addFilterTags(tag)} key={index}>{tag}</span>
                ))}
            </div>
            <div className="works">
                {projects?.map((project, index) => {
                    if (project.featured) {
                        return (<div onClick={()=> {
                                setSelectedProject(project)
                            }} className={"project1"} key={index}>
                            <div className="image">
                                <img src={project.image} alt={project.title}/>
                            </div>
                            <div className="content">
                                <div className={"content-detail"}>
                                    <h3>{project.title}</h3>
                                    <span>{project.category}</span>
                                </div>

                                <p>{project.description}</p>
                                <div className="techStacks">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            onMouseEnter={() => changeInnerTextOnHovering(tech)}
                                            onMouseLeave={() => changeInnerTextOnHovering(tech)}
                                            className={isTagActive(tech) ? "activeTag" : "notActive"}
                                            onClick={() => addFilterTags(tech)} key={index}>{tech}</span>
                                    ))}
                                </div>
                                <div className="actions">
                                    <button><MdLiveTv/>Live Preview</button>
                                    <button><FaCode/>Source Code</button>
                                </div>
                            </div>
                        </div>
                        )}
                })}
            </div>
        </Container>
        </>
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

        @media screen and (max-width: 700px) {
            width: 60%;
        }
    }

    .filterTags {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 3rem 0;

        span {
            padding: 5px 10px;
            background-color: #eee;
            color: #333;
            border-radius: 5px;
            font-family: "Satisfy", cursive;
            cursor: pointer;
            border: 1px solid #ddd;
            animation: slideIn 0.5s;
        }
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
        grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
        place-items: center;
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
            animation: slideIn 0.5s;


            @keyframes slideIn {
                from {
                    transform: translateY(50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }


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

                .content-detail {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    span {
                        padding: 5px 10px;
                        border:1px solid #ffd283;
                        color: #333;
                        border-radius: 5px;
                        font-family: "Satisfy", cursive;
                    }
                }

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

                    span.activeTag {
                        background-color: #333;
                        color: #fff;
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
