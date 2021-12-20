import React from "react";
import MeOnWater from "../../img/mansoor.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Hi, I'm Working as a Front-End Developer with 2+ yrs Experience.Proficient in identifying / adopting emerging trends and addressing industry requirements to achieve organizational objectives and norms.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">HTML5</li>
                                <li className="skill">CSS 3</li>
                                <li className="skill">JAVSCRIPT</li>
                                <li className="skill">REACT JS</li>
                                <li className="skill">BOOTSTRAP</li>
                                <li className="skill">REACT-ROUTER</li>
                                <li className="skill">MATERIAL-UI</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;