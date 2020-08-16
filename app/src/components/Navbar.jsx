import React,{useState, useEffect} from "react";
import RightNav from './RightNav';
import BurgerMenu from './BurgerMenu';


function Navbar(){
	const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })
		return(
			<div className = "navbar" id="navbar">
			<div className = "navbar-content">
				<div>SHANNON M. KARIUKI</div>
				{isDesktop ? <RightNav />: <BurgerMenu />}
			</div>
	  		</div>
		);
	
}
export default Navbar;