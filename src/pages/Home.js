import React from "react"
import Layout from "../components/layout"

export default function PersonalizedHome() {
  return(  
   <Layout>
        <div class="container-fluid">
            <div class="row" id="HomeImg">
                <span></span>
                <h1 id="HomeImgText">Slogan Slogan Slogan Slogan Slogan</h1>
                <span></span>
            </div>
            <div class="row" id="HomeBody">
                <div class="col">
            <form id="HomeForm">	
                <table>
                    <tr>
                      <td> 
                        <h3 id="ManageV">Manage Vehicles</h3>
                        <hr></hr>
                      </td>
                    </tr>    
                    <tr>			
                      <td>				
                         <p>Add Vehicle Entry</p>			
                      </td>			
                      <td>				
                        <button id="PlusBtn">+</button>
                      </td>
                    </tr>
                    <tr>
                      <td>				
                        <p>Remove Vehicle Entry</p>			
                      </td>			
                      <td>				
                        <button id="MinusBtn">-</button>			
                      </td>		
                    </tr>
                </table>
            </form> 
                </div>
                <div class="col-6" id="MyGarage">
                    <h2>My Garage</h2>    
                </div>
                <div class="col">

                </div>
            </div>
        </div>
        
  </Layout>
    )
}
