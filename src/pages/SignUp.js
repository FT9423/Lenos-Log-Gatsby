import React from "react"
import Layout from "../components/layout"
import MainLogo from "./images2/ExampleMainLogo.png"
import CompactLogo from "./images2/ExampleCompactLogo.png"

export default function SignUp() {
  return (
    <Layout>  
      <div class="container-fluid">
        <div class="row" id="SignUp">
          <div class="col-5">
            <img src={MainLogo} alt="Example Company Logo" id="SMainLogo"></img>
            <h1 id="SignUpSlogan">Slogan Slogan Slogan Slogan</h1>
            <button id="SignUpBtnX">Already signed up?</button>
          </div>
          <div class="col-7">
            <form id="SignUpForm">	
              <table>
                    <tr>
                      <th id="SignUpFor"> 
                        <h3>Sign Up For</h3>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h3 id="SLenosLog">Leno's Log</h3>
                      </td>
                      <td> 
                        <img src={CompactLogo} alt="Example Company Logo" id="SCompactLogo"></img>
                      </td>
                    </tr>     
                    <tr>			
                      <td>				
                         <label>Email Address:</label>			
                      </td>			
                      <td>				
                        <input placeholder="JohnSmith123@example.com"></input>
                      </td>
                    </tr>
                    <tr>
                      <td>				
                        <label>Username:</label>			
                      </td>			
                      <td>				
                        <input placeholder="6 or more characters"></input>			
                      </td>		
                    </tr>
                    <tr>
                      <td>				
                        <label>Password:</label>			
                      </td>			
                      <td>				
                        <input placeholder="Minimum of 8 characters (mixture of letters/ numbers"></input>			
                      </td>		
                    </tr>
                    <tr>
                      <td>				
                        <label>Confirm Password:</label>			
                      </td>			
                      <td>				
                        <input placeholder="Verify Password"></input>			
                      </td>		
                    </tr>
                    <tr>
                      <td>
                        <button id="SignUpBtn">Sign me up!</button>
                      </td>
                    </tr>		
              </table>
            </form> 
          </div>
        </div>
      </div>
    </Layout>
  )
} 


