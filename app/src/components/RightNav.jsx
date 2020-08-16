import React from "react";
import {Link} from "react-scroll";



function RightNav(){
		return(
			<div className="right-nav" >
					<ul className="navbar-items" >
					<li className="navbar-item" >
					<Link 
						activeClass = "active"
						to="about"
 						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						className="nav-link"
						 smooth={true}
					>
				 		ABOUT
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="technologies"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						 smooth={true}
					>TECHNOLOGIES
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="projects"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						smooth={true}
					>
						PROJECTS
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="experience"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						 smooth={true}
					>
						EXPERIENCE
					</Link>
					</li>
					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="education"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						smooth={true}
					>
						EDUCATION
					</Link>
					</li>
				</ul>
			</div>
	  		
		);
	
}
export default RightNav	;