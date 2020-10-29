import React, { useEffect, useState } from "react"
import { FaPlusCircle, FaTrash } from "react-icons/fa"
import queryString from "query-string"
import { navigate } from "gatsby"
import Helmet from "react-helmet"

import API from "../helpers/api"
import Layouts from "../layouts"

export default function ServiceHistory({ location }) {
  const [services, setServices] = useState([])
  const car = queryString.parse(location.search)

  const deleteService = async serviceId => {
    try {
      const data = await API.delete("/service/deleteService", {
        params: {
          serviceId,
        },
      })
      if (data.status === 204) {
        const filterData = services.filter(
          service => service.serviceId !== serviceId
        )
        setServices(filterData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getServices = async () => {
    try {
      const { data } = await API.get("/service/getServicesByCar", {
        params: {
          carId: car.carId,
        },
      })
      setServices(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getServices(), [])

  return (
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="Example"></meta>
      </Helmet>
      <Layouts>
        <h1 className="text-center my-5">Service History</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <button
                type="button"
                className="btn btn btn-primary mb-3 float-right"
                onClick={() => navigate(`/add-service?carId=${car.carId}`)}
              >
                Add Service <FaPlusCircle />
              </button>
              <button
                type="button"
                className="btn btn btn-dark mb-3 float-left"
                onClick={() => navigate(`/home`)}
              >
                Return to my garage 
              </button>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Service (Detail)</th>
                    <th scope="col">Mileage</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {/* when there is no records */}
                  {services.length === 0 && (
                    <td className="text-center" colSpan="7">
                      No service history yet
                    </td>
                  )}
                  {services?.map(
                    ({ serviceId, date, servDetail, servMileage, cost }) => (
                      <tr key={serviceId}>
                        <td>{servDetail || "-"}</td>
                        <td>{servMileage || "-"}</td>
                        <td>{cost || "-"}</td>
                        <td>{date}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn btn-danger"
                            onClick={() => deleteService(serviceId)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
