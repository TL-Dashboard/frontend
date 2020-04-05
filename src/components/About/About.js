import React from 'react';

const About = () => {
    return (
            <div className="about">
                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p><strong>Robert Gordon</strong></p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-UN66JA72N-811a63af5d29-512" alt="Robert Gordon" height="200px" />
                        <p>Project Lead / Dev</p>
                    </div>
                </div>
           
                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p><strong>Alexander Besse</strong></p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-URLATSSKA-308016b79b83-512" alt="Alexander Besse" height="200px" />
                        <p>UX / React Dev</p>
                    </div>
                </div>

                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p><strong>Angel Guzman</strong></p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-UTGCH2FQV-d0c2a3fd1ecb-512"  alt="Angel Guzman" height="200px" />
                        <p>UX / React Dev</p>
                    </div>
                </div> 
            </div>
    )
}

export default About;