import React from 'react';
import './About.css';

function About(){
    return(
        <div className="About">
            <h2 style={{ color: 'white' }}>I'm a self-taught web developer <br/>
                Skilled in javascript,react,html and css , <br/>
                i enjoy building web applications
                </h2>
         <ul style={{color:'white'}}></ul>
            <li>Frontend:React, Javascript, Html, Css</li>
            <li>Backend: Node.js, Express</li>
            <li>Tools: Git, vs code, APIs, Authetication</li>

        </div>
    );
}
export default About;
