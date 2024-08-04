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
                        <img
                            src="https://img.freepik.com/free-photo/dating-app-interface-smartphone_23-2149374755.jpg?t=st=1722783943~exp=1722787543~hmac=e4ef90369f91ae590e4783639ce8092ef7ddf3caa92dbd246a62ecb7f5001fcc&w=900"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>FinanceVision</h3>
                        <p>FinanceVision is a personal finance management app that helps you track your income and
                            expenses. It also provides a dashboard to visualize your financial data.</p>
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
                        <img
                            src="https://img.freepik.com/free-photo/high-angle-hands-holding-smartphone_23-2150671596.jpg?t=st=1722783919~exp=1722787519~hmac=f7c19208f1dcd7a7eba74b73656edf054b7254a0e349e4eaec97e1ade5b6fd13&w=996"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>Eventify</h3>
                        <p>Eventify is an event management app that helps you create and manage events. It also provides
                            a dashboard to visualize your event data.</p>
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
                        <img
                            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?t=st=1722783885~exp=1722787485~hmac=50943c8d8e10a160f4a38e154f4b950a0da77f5ff9e981b9afb1edbabbc3dddf&w=900"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>Influencer-HUB</h3>
                        <p>Influencer-HUB is a social media management app that helps you manage your social media
                            accounts. It also provides a dashboard to visualize your social media data.</p>
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
                        <img
                            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?t=st=1722783885~exp=1722787485~hmac=50943c8d8e10a160f4a38e154f4b950a0da77f5ff9e981b9afb1edbabbc3dddf&w=900"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>Influencer-HUB</h3>
                        <p>Influencer-HUB is a social media management app that helps you manage your social media
                            accounts. It also provides a dashboard to visualize your social media data.</p>
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
                        <img
                            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?t=st=1722783885~exp=1722787485~hmac=50943c8d8e10a160f4a38e154f4b950a0da77f5ff9e981b9afb1edbabbc3dddf&w=900"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>Influencer-HUB</h3>
                        <p>Influencer-HUB is a social media management app that helps you manage your social media
                            accounts. It also provides a dashboard to visualize your social media data.</p>
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
                        <img
                            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?t=st=1722783885~exp=1722787485~hmac=50943c8d8e10a160f4a38e154f4b950a0da77f5ff9e981b9afb1edbabbc3dddf&w=900"
                            alt="project1"/>
                    </div>
                    <div className="content">
                        <h3>Influencer-HUB</h3>
                        <p>Influencer-HUB is a social media management app that helps you manage your social media
                            accounts. It also provides a dashboard to visualize your social media data.</p>
                        <div className="techStacks">
                            <span>React</span>
                            <span>Node</span>
                            <span>Express</span>
                        </div>
                        <div className="actions">
                            <button>View</button>
                            <button>Code</button>
                        </div>
                    </div>5px 0 0 5px;
                </div>
            </div>
        </Container>
    )
};


const Container = styled.div`
    display: grid;
    width: 80%;
    margin: 3rem auto;
    

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
        gap: 1rem;
        row-gap: 4rem;
        margin-top: 3rem;

        .project1 {
            display: grid;
            grid-template-columns: 1fr;
            transition: transform 0.5s;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);


            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 16/9;
                position: relative;
                padding: 0 1rem;
                top: -2rem;
                transition: all 0.2s;


                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    transition:top 0.5s;
                    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
                }
            }

            .content {
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap:7px;
                
                >*{
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
                    span {
                        padding: 5px;
                        margin-right: 5px;
                        background-color: #333;
                        color: #fff;
                        border-radius: 5px;
                    }
                }

                .actions {
                    padding: 0 10px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                    border-top: 1px solid #333;
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
