import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import RightNav from './RightNav';


function BurgerMenu(){
	const [open, setOpen] = useState(false); 
		return(
            <div>   
    			 <span className="burger-menu">
                    <FontAwesomeIcon 
                    icon={faBars} 
                    className = "icon"
                    size="2x"
                    open ={open}
                    onClick ={() => setOpen(!open)}
                     />
                </span>
               { open && <RightNav /> }   
            </div>
		);
	
}
export default BurgerMenu;