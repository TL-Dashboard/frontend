import React, {useState} from 'react';

const About = () => {
    return (
            <div className="about">
                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p>Robert Gordon</p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-UN66JA72N-811a63af5d29-512" alt="picture of Robert Gordon" height="200px" />
                        <p>Project Lead / Dev</p>
                    </div>
                </div>
           
                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p>Alexander Besse</p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-URLATSSKA-308016b79b83-512" alt="picture of Alexander Besse" height="200px" />
                        <p>UX / React Dev</p>
                    </div>
                </div>

                <div className="about__container">
                    <div className="about__container__smallcontainer">
                        <p>Angel Guzman</p>
                        <img src="https://ca.slack-edge.com/T4JUEB3ME-UTGCH2FQV-d0c2a3fd1ecb-512"  alt="picture of Angel Guzman" height="200px" />
                        <p>UX / React Dev</p>
                    </div>
                </div> 
            </div>
    )
}

export default About;