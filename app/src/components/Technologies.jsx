import React from 'react';
import html5 from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import java from "../assets/images/java.svg";
import mysql from "../assets/images/mysql.svg";
import react from "../assets/images/react.svg";
import typescript from "../assets/images/typescript.svg";
import redux from "../assets/images/redux.svg";

const Technologies = () => (
<div className = "technologies" id = "technologies">
	<h2>Technologies </h2>
	<div className="content">
		<div className="skills_one"> 
	    <div className="skills_images"> 
	    	<img src ={java} className= "skills_image"/>
	    	<img src ={react} className= "skills_image"/>
	    	<img src ={html5} className= "skills_image"/>
	    	<img src ={css} className= "skills_image"/>
	    	<img src ={mysql} className= "skills_image"/>
	    	<img src ={typescript} className= "skills_image"/>
	    	<img src ={redux} className= "skills_image"/>
	    </div>
	   </div>                          
     </div>

 </div>
)
export default Technologies
