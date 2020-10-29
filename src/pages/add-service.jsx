import React, { Link, useRef } from "react"
import queryString from "query-string"
import { navigate } from "gatsby"
import Helmet from "react-helmet"

import API from "../helpers/api"
import Layouts from "../layouts"

export default function AddService({ location }) {
  const formRef = useRef()
  const car = queryString.parse(location.search)

  const handleAddVehicle = async e => {
    e.preventDefault()
    const { date, service, detail, mileage, cost } = e.target.elements
    try {
      const data = await API.post("/service/createService", {
        carId: car.carId,
        date: date.value,
        servDetail: detail.value,
        servMileage: mileage.value,
        cost: cost.value,
      })
      formRef.current.reset()
      navigate(`/service-history?carId=${car.carId}`)
      alert("Service added successfully.")
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
              <h2 className="text-center">Add Service</h2>
              <form ref={formRef} onSubmit={handleAddVehicle}>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="detail">Service Detail</label>
                  <textarea
                    name="detail"
                    id="detail"
                    rows="5"
                    className="form-control"
                    placeholder="e.g Oil Change - Synthetic oil change in kansas city."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mileage">Mileage</label>
                  <input
                    id="mileage"
                    type="text"
                    name="mileage"
                    className="form-control"
                    placeholder="e.g 100,000"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cost">Cost</label>
                  <input
                    id="cost"
                    type="text"
                    name="cost"
                    className="form-control"
                    placeholder="e.g 45.99"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
