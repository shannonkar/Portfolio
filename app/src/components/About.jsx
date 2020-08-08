import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload} from '@fortawesome/free-solid-svg-icons'

function About(){
	return (
		<div className= "about">
			
				<img
				  className= "avatar"
	              src= {require('../profilepic.png')}
	              alt="avatar"
	               />
	     <section className = "aboutText"> 
	     	<h2> About Me </h2>
	     	 <p>
              I am a recent computer science graduate from Villanova University actively looking for software/web developer roles.
              I love being in tech because it challenges me to be a continuous learner. 
             I am currently learning React JS and I document my learning process on my Youtube channel and Medium blog.
             <br></br>
              I started my tech journey through the encouragement of my first mentor who let me shadow him and who introduced me to Java. I am passionate about mentoring and encouraging young kids to learn how to code
              especially those who are underrepresented in tech. Throughout my time at Villanova, I actively served as a lead coordinator for the coding club at St. Francis De Sales School in West Philadelhia 
              where we introduced the students to programming using platforms such as Scratch and Processing. I am passionate about creating a more inclusive tech workforce and becoming the change I want to see in the world.
               </p> 
               <section className ="links">
                <a
       				 href="https://www.facebook.com/steamlabke/"
       				 className="facebook social">
        			<FontAwesomeIcon icon={faGithub} size="2x" />Github
     		 </a> 
     		  <a
       				 href="https://www.facebook.com/steamlabke/"
       				 className="facebook social">
        			<FontAwesomeIcon icon={faLinkedin} size="2x" />LinkedIn
     		 </a> 
     		  <a
       				 href="https://www.facebook.com/steamlabke/"
       				 className="facebook social">
        			<FontAwesomeIcon icon={faFileDownload} size="2x" />Resume
     		 </a>
     		 <a
       				 href="https://www.facebook.com/steamlabke/"
       				 className="facebook social">
        			<FontAwesomeIcon icon={faMedium} size="2x" />Medium
     		 </a>  
     		 </section>
	     </section>

		</div>
		)
}
export default About;