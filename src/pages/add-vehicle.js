import React, { useRef } from "react"
import Helmet from "react-helmet"
import { navigate } from "gatsby"
import cookie from "js-cookie"

import API from "../helpers/api"
import Layouts from "../layouts"

export default function AddVehicle() {
  const formRef = useRef()
  const user = cookie.getJSON("user")

  const handleAddVehicle = async e => {
    e.preventDefault()
    const { make, model, year, color, mpg } = e.target.elements
    try {
      const data = await API.post("/car/addCar", {
        userId: user?.userId,
        make: make.value,
        model: model.value,
        year: year.value,
        color: color.value,
        mpg: mpg.value,
      })
      formRef.current.reset()
      navigate(`/home`)
      alert("Vehicle added successfully.")
    } catch (error) {
      console.log(error)
      alert("Something wrong...")
    }
  }

  return (
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="Example"></meta>
      </Helmet>
      <Layouts>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-sm-5">
              <h2 className="mt-2 text-center">Add Vehicle</h2>
              <form ref={formRef} onSubmit={handleAddVehicle}>
                <div className="form-group">
                  <label htmlFor="make">Make</label>
                  <input
                    id="make"
                    type="text"
                    name="make"
                    className="form-control"
                    placeholder="e.g BMW"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Model</label>
                  <input
                    id="model"
                    type="text"
                    name="model"
                    className="form-control"
                    placeholder="e.g BMW 5 series"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year">Year</label>
                  <input
                    id="year"
                    type="text"
                    name="year"
                    className="form-control"
                    placeholder="e.g 2016"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Color</label>
                  <input
                    id="color"
                    type="text"
                    name="color"
                    className="form-control"
                    placeholder="e.g Black"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mpg">Mpg</label>
                  <input
                    id="mpg"
                    type="text"
                    name="mpg"
                    className="form-control"
                    placeholder="e.g 40"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Vehicle
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
