import React from "react"
import { Link } from "@reach/router"
import "./layout.scss"
import CompactLogo from "./images/ExampleCompactLogo.png"


export default function Layout({children}) {
    return (
        <div>
        <nav class="navbar navbar-dark" id="navBar">
          <div>
          <img src={CompactLogo} alt="Example Company Logo" id="NCompactLogo"></img>
          <span id="navBrand">Leno's Log</span>
          </div>
          <div></div> <div></div> <div></div> <div></div> <div></div>
              <ul class="nav navbar-nav">
                <li><Link to="SignUp">Sign Up</Link></li>    
              </ul> 
              <ul class="nav navbar-nav">    
                <li><Link to="LogIn">Log In</Link></li>
              </ul>
          <div></div> 
        </nav>
         
        
        <div style={{ maxWidth: '2000px', margin: '0 auto',}}>
           
            {children}
        </div>
       
      </div>
    )
}