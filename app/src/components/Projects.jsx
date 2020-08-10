import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
function Projects(){
	return(
		 <div className="projects" id="projects">
		 <h2>Projects</h2> <span></span>
	        <div className="project-section">
	         <div className="content">
	                <div className="first info background"></div>
	                <div className="footer">
	                    <h3>STEAM-LAB KENYA</h3>
	                    <p>Developed and maintain the STEAM-LAB KENYA website</p>
						<p>Tech Stack: HTML5,CSS, React JS</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>

	                    <a>Github Repo </a>
	                </div>             
            </div>
	            <div className="content">
	                <div className="first info background"></div>
	                <div className="footer">
	                    <h3>Moodify</h3>
	                    <p>Designed and implemented a website that generates song suggestions based on a user’s
							mood.</p>
						<p> HTML5, CSS, ReactJS, NodeJS</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>

	                    <a>Github Repo </a>
	                </div>             
           		 </div>

                <div className="content">
	                <div className="second info background"></div>
	                <div className="footer">
	                    <h3>Jumpiana</h3>
	                    <p>Collaborated in a team of 4 students to design, create and test code for a multi-level 2D platformer game.</p>
	                    <p>Tech Stack Used: C#, Unity</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>
	                </div>             
            </div>

            <div className="content">
	                <div className="third info background"></div>
	                <div className="footer">
	                    <h3>Expense Tracker</h3>
	                    <p>Created a user-friendly expense tracker to help users manage their income and expenses easily</p>
	                   <p>Tech Stack Used: React JS, Redux, HTML5, CSS</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>
	                </div>             
            </div>

                <div className="content">
	                <div className="third info background"></div>
	                <div className="footer">
	                    <h3>Contact Form</h3>
	                    <p>Created a contact form with input validation as a project to learn React Hooks</p>
	                   <p>Tech Stack Used: React JS, React Hooks, HTML5, CSS</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>
	                </div>             
            </div>
             

                <div className="content">
	                <div className="fourth info background"></div>
	                <div className="footer">
	                    <h3>Face Recognition App</h3>
	                    <p>Created and deployed a website that registers and stores users in a PostgreSQl database and recognizes faces using Clarify API</p>
	                    <p>Tech Stack Used:ReactJS, Node.js, PostgreSQL</p>
	                    <a href="https://customerlist.netlify.app/" target="_blank" rel="noopener">Check it out</a>
	                </div>             
            </div>
           </div>
          </div>
		)
}
export default Projects;