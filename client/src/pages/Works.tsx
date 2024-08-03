import styled from "styled-components";

export const WorksPage: React.FC = () => {
    return (
        <Container>
            <div className="content-header">
                <h2>Latest Projects</h2>
                <p>Github</p>
            </div>
            <div className="works">
                <div className="project1">
                    <div className="image">
                        <img src="https://via.placeholder.com/150" alt="project1" />
                    </div>
                    <div className="content">
                        <h3>Project 1</h3>
                        <p>Project 1 description</p>
                        <div className="techStacks">
                            <span>React</span>
                            <span>Node</span>
                            <span>Express</span>
                        </div>
                        <div className="actions">
                            <button>View</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="image">
                        <img src="https://via.placeholder.com/150" alt="project1" />
                    </div>
                    <div className="content">
                        <h3>Project 1</h3>
                        <p>Project 1 description</p>
                        <div className="techStacks">
                            <span>React</span>
                            <span>Node</span>
                            <span>Express</span>
                        </div>
                        <div className="actions">
                            <button>View</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="image">
                        <img src="https://via.placeholder.com/150" alt="project1" />
                    </div>
                    <div className="content">
                        <h3>Project 1</h3>
                        <p>Project 1 description</p>
                        <div className="techStacks">
                            <span>React</span>
                            <span>Node</span>
                            <span>Express</span>
                        </div>
                        <div className="actions">
                            <button>View</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="image">
                        <img src="https://via.placeholder.com/150" alt="project1" />
                    </div>
                    <div className="content">
                        <h3>Project 1</h3>
                        <p>Project 1 description</p>
                        <div className="techStacks">
                            <span>React</span>
                            <span>Node</span>
                            <span>Express</span>
                        </div>
                        <div className="actions">
                            <button>View</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};


const Container = styled.div`
    display: grid;
    width: 80%;
    margin: 0 auto;

    .content-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Satisfy", cursive;
    }

    .works {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        padding: 20px;
        margin-top: 50px;

        .project1 {
            display: grid;
            grid-template-columns: 1fr;
            /* background-color: #fff; */
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 16/9;
                position: relative;
                top: -2rem;
                padding: 1rem;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px 0 0 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                }
            }

            .content {
                padding: 10px;
                h3 {
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                p {
                    font-size: 1rem;
                    color: #333;
                }

                .techStacks {
                    display: flex;
                    span {
                        padding: 5px;
                        margin-right: 5px;
                        background-color: #333;
                        color: #fff;
                        border-radius: 5px;
                    }
                }

                .actions {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                    button {
                        padding: 5px 10px;
                        border: none;
                        border-radius: 5px;
                        background-color: #333;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`