import React, { useState } from "react";
import {FiMenu} from 'react-icons/fi';


const Logo = ()  => {
    return (
        <div className="logo">
           <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo' />
        </div>
    )
}
 
const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <>
          
            <nav>
                <Logo  />
                <div   className={
                 isNavExpanded ? "navigation-menu expanded":"navigation-menu"
        }
      > 
             
             <a href="#links">features</a>
             <a href="#links">pricing</a>
             <a href="#links">resources</a>
              <div style={{borderTop:"1px solid #9e9aa7"}}></div>
           <div className="btn">
             <a href="#links">login</a>
             <a href="#links" id="signupbtn">sign up</a>
          </div>

       </div>
               
                <FiMenu id="openmenu"   onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
        }}/>
            </nav>
        </>
    )
}
const Header = () => {
    return(
        <>
                <Nav />
        </>
     )
}

export default Header;