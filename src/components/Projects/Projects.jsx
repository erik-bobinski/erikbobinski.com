import React from 'react'
import './Projects.css'
import { CPPLogo, GitHubLogo, LateralLeap, 
        OMNET, PPTLogo, PythonLogo, 
        SkeleGif, VHDL } from '../../assets';

        const Projects = () => {
            return (
                <div id="projects" className="projects-container">
                    <h2 className="projects-title">Projects</h2>
                    <div className="project-item">
                        <h3 className="project-name">Gif Skeletonization</h3>
                        <div className="project-links">
                            <img src={PythonLogo} alt="Python Logo" className="project-icon" /> 
                            <div className="project-icon-container">
                                <a href="https://github.com/hteele/Skele-gif" 
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={GitHubLogo} alt="GitHub Logo" className="project-icon" /> 
                                </a>
                                <span className="project-tooltip">View Repository</span>
                            </div>
                        </div>
                        <img src={SkeleGif} alt="Gif Skeletonization" className="project-image" />
                        <p className="project-description">
                            Worked in a team to apply a skeletonization algorithm to user's input gif.
                            Input gif is broken down into constituent frames, algorithm is applied to each frame,
                            then reconstructed. Input and result are compared side-by-side.
                        </p>
                    </div>
                    <div className="project-item">
                        <h3 className="project-name">Airport Queueing System</h3>
                        <div className="project-links">
                            <img src={CPPLogo} alt="CPP Logo" className="project-icon" />
                            <div className="project-icon-container">
                                <a href="https://github.com/Aoli03/CPE345-Modeling-And-Simulation-Project" 
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={GitHubLogo} alt="GitHub Logo" className="project-icon" />
                                </a>
                                <span className="project-tooltip">View Repository</span>
                            </div>
                            <div className="project-icon-container">
                                <a href="https://docs.google.com/presentation/d/1lHEp9XzPGYXh7ADmManFEdWFkhy12UeahJ65vWAqDDo/edit?usp=sharing"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={PPTLogo} alt="PPT Logo" className="project-icon" /> 
                                </a>
                                <span className="project-tooltip">View Presentation</span>
                            </div>
                        </div>
                        <img src={OMNET} alt="OMNET Proj" className="project-image" />
                        <p className="project-description">
                        Worked in a team to design an airport queueing system in OMNeT++, 
                        a C++ modeling and simulation IDE, then implemented an online check-in line 
                        to analyze its performance on minimizing the average amount of time 
                        a customer spends in the system. 
                        View the slide deck for much more detailed information!
                        </p>
                    </div>
                    <div className="project-item">
                        <h3 className="project-name">Lateral Leap Game</h3>
                        <div className="project-links">
                            <img src={VHDL} alt="VHDL" className="project-icon" /> 
                            <div className="project-icon-container">
                                <a href="https://github.com/erik-bobinski/CPE487_finalProject" 
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={GitHubLogo} alt="GitHub Logo" className="project-icon" /> 
                                </a>
                                <span className="project-tooltip">View Repository</span>
                            </div>
                        </div>
                        <img src={LateralLeap} alt="Gif Skeletonization" className="project-image" />
                        <p className="project-description">
                            Worked in a team to program a video game in VHDL, 
                            inspired by the original Pong game from the 1970s. 
                            Control the horizontal movement of the ball as you 
                            bounce across moving platforms to survive as long as you can. 
                            Your score is tracked in seconds survived, which is displayed
                            on the counter of your FPGA!
                        </p>
                    </div>
                </div>
            );
        };

export default Projects