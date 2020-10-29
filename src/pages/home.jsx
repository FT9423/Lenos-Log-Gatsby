import React, { useEffect, useState } from "react"
import { FaEye, FaTrash } from "react-icons/fa"
import { Link, navigate } from "gatsby"
import Helmet from "react-helmet"
import cookie from "js-cookie"

import API from "../helpers/api"
import Layouts from "../layouts"

export default function PersonalizedHome() {
  const [cars, setCars] = useState([])
  const user = cookie.getJSON("user")

  const deleteCar = async carId => {
    try {
      const data = await API.delete("/car/deleteCar", {
        params: {
          carId,
        },
      })
      if (data.status === 204) {
        const filterData = cars.filter(car => car.carId !== carId)
        setCars(filterData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCars = async () => {
    try {
      const { data } = await API.get("/car/getCarsByUser", {
        params: {
          userId: user?.userId,
        },
      })
      setCars(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getCars(), [])

  return (
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="Example"></meta>
      </Helmet>
      <Layouts>
        <div className="container-fluid">
          <div className="homeHero">
            <h1 className="homeHeroText">We understand how valuable your time is, so we make logging your garage quick and simple!</h1>
          </div>
          <div className="row" id="HomeBody">
            <div className="col">
              <form id="HomeForm">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h3 id="ManageV">Manage Vehicles</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Add Vehicle Entry</p>
                      </td>
                      <td>
                        <Link to="/add-vehicle">
                          <button id="PlusBtn">+</button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="col-6" id="MyGarage">
              <h2>My Garage</h2>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                    <th scope="col">Color</th>
                    <th scope="col">Year</th>
                    <th scope="col">Mpg</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {/* when there is no records */}
                  {cars.length === 0 && (
                    <td className="text-center" colSpan="7">
                      No cars
                    </td>
                  )}
                  {cars?.map(({ carId, make, model, mpg, year, color }) => (
                    <tr key={carId}>
                      <td>{make}</td>
                      <td>{model}</td>
                      <td>{color}</td>
                      <td>{year}</td>
                      <td>{mpg}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary mr-1"
                          onClick={() =>
                            navigate(`/service-history?carId=${carId}`)
                          }
                        >
                          <FaEye />
                        </button>
                        <button
                          type="button"
                          className="btn btn btn-danger"
                          onClick={() => deleteCar(carId)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
