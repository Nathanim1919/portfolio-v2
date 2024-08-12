import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";


type ProjectDetailProps = {
    project: any;
};


export const ProjectDetail: React.FC<ProjectDetailProps> = ({project}) => {
    return (
        <Container project={project} className={'project-detail'}>
            <div className="project-image">
                <div className={"closeIcon"}>
                    <IoArrowBackSharp/>
                </div>
                <Header>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p>{project.date}</p>
                </Header>
            </div>
            <div className="project-info">
               <div className={"links"}>
                          <div className={"generalInfo"}>
                                <h3>General Info</h3>
                              <div className={"info"}>
                                  <span>Cayegory: {project.category}</span>
                                  <span>date: {project.date}</span>
                                  <span>Status: {project.status}</span>
                                  <span>Type: {project.type}</span>
                                  <span>Role: {project.role}</span>
                              </div>
                          </div>
                       <div className={"teckstack"}>
                             <h3>Tech Stacks</h3>
                              <div>
                                {project.tech.map((tech: string, index: number) => (
                                     <span key={index}>{tech}</span>
                                ))}
                              </div>
                    </div>
               </div>
                <div className={"story"}>
                    <div>
                        <h3>responsibilities</h3>
                        <p>{project.responsibilities}</p>
                    </div>

                    <div>
                        <h3>challenges</h3>
                        <p>{project.challenges}</p>
                    </div>

                    <div>
                        <h3>learned</h3>
                        <p>{project.learned}</p>
                    </div>

                    <div>
                        <h3>improvements</h3>
                        <p>{project.improvements}</p>
                    </div>

                    <div>
                        <h3>feedback</h3>
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
    }
    
    p {
        font-size: 1rem;
        color: white;
        margin:0;
    }
`


interface ContainerProps {
    project: any;
}

const Container = styled.div<ContainerProps>`
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    backdrop-filter: blur(5px);
    overflow: hidden;
    margin: auto;
    z-index: 1000;

    .project-image {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, rgba(51, 51, 51, 0.81), rgba(51, 51, 51, 0.25)), url(${props => props.project.image});
        background-size: cover;
        background-position: center;
        
        .closeIcon{
            position: absolute;
            top: 10px;
            left: 10px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    }
    
    .project-info{
        width: 100%;
        height: 79%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        overflow: hidden;
        padding: 20px;
        
        .links {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
         
            height: 100%;
            overflow-y: auto;
            
            .generalInfo {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
             
                
                .info{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                span {
                    padding: 5px 10px;
                    border:1px solid #ffd283;
                    color: #333;
                    border-radius: 5px;
                    font-family: "Satisfy", cursive;
                }
            }
            
            .teckstack {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                gap: 10px;
                
                span {
                    padding: 5px 10px;
                    border:1px solid #ffd283;
                    color: #333;
                    border-radius: 5px;
                    font-family: "Satisfy", cursive;
                }
            }
        }
        
        .story {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            height: 100%;
            overflow-y: auto;
            
            h3 {
                font-size: 2rem;
                font-weight: bold;
                font-family: "Satisfy", cursive;
                padding: 0 10px;
            }
            
            p {
                font-size: 1rem;
                color: #333;
                padding: 0 10px;
            }
        }
    }
`
