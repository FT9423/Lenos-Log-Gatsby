import React from "react"
import Helmet from "react-helmet"

import Layouts from "../layouts"

export default function Home(props) {
  return ( 
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="Example"></meta>
      </Helmet>
      <Layouts location={props.location}>
        <div className="container-fluid" id="LandingPage">
          <div className="row">
            <div className="col">
              <h2>Service your vehicle, we make logging easy.</h2>
              <p>
              Keeping track of every maintenance cost your vehicles require throughout the year can be a tedious task. Don’t let accumulating 
              services cause you any stress, create an account with Leno’s Log to keep track stress free.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-md-4">
              <h3>Monitor multiple vehicles.</h3>
              <p>
              Whether you have one vehicle or six, 
              add them all to “My Garage” to have all your vehicles in one place.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Determining frequency.</h3>
              <p>
              Submitting the date and mileage for each service allows you to accurately evaluate how often 
              that vehicle need routine service or unexpected maintenance.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Time for an upgrade?</h3>
              <p>
              Deciding if it’s the correct time to trade in your beloved can be a difficult question.
              Seeing the cost and frequency of your vehicle’s maintenance makes it easier to weigh the cost of a car payment if you decide to upgrade.
              </p>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
