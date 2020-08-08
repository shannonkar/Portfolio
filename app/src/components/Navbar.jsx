import React, { Component } from "react";
import logo from "../logo.jpeg";
import {Link, animateScroll as scroll} from "react-scroll";


class Navbar extends Component{
	scrollToTop = () => {
       scroll.scrollToTop(); 
	};
	render(){
		return(
			<div className = "navbar" id="navbar">
			<div className = "navbar-content">
				<div>SHANNON M. KARIUKI</div>
				<ul className="navbar-items">
					<li className="navbar-item" >
					<Link
						activeClass = "active"
						to="about"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						>
				 	ABOUT
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="main"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>TECH STACK
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="learning"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						EXPERIENCE
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="bigtext"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						EDUCATION
					</Link>
					</li>
					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="bigtext"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						PROJECTS
					</Link>
					</li>
				</ul>
			</div>
	  		</div>
		);
	}
}
export default Navbar;