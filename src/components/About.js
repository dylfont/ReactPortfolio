import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../assets/ProfilePic.png').default}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>
                <p>
                    Hello and welcome to my portfolio. I am Dylan Fontenot, a college graduate and business operations professional seeking a career transition to software development. I chose to pursue software development for its rapidly evolving environment in order to gain hard tech skills and adapt to a changing world. I am currently in the process of earning a full stack developer certificate from Southern Methodist University. I invite you to look at my work and contact me by referencing the links on my portfolio.
                    
                </p>
            </div>
        </section>
    );
}

export default About;
