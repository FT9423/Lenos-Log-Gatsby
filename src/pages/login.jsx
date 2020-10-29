import React, { useState } from "react"
import Helmet from "react-helmet"
import { navigate } from "gatsby"
import cookie from "js-cookie"

import API from "../helpers/api"
import Layouts from "../layouts"

export default function LogIn() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async e => {
    e.preventDefault()
    try {
      const { data } = await API.post("/user/userLogin", {
        userName,
        password,
      })
      cookie.set("user", data)
      navigate("/home")
    } catch (error) {
      alert("Username or password you have entered is invalid.")
      console.log(error)
    }
  }

  return (
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="S"></meta>
      </Helmet>
      <Layouts>
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-md-5">
              <h2 className="text-center my-5">Log In </h2>
              <form onSubmit={login}>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    User ID:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={userName}
                      id="staticEmail"
                      className="form-control"
                      onChange={e => {
                        setUserName(e.target.value)
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Password:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      value={password}
                      id="inputPassword"
                      className="form-control"
                      onChange={e => {
                        setPassword(e.target.value)
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Log In
                  </button>
                </div>
                <div>
                <button
                type="button"
                className="btn btn btn-dark mb-3 float-left"
                onClick={() => navigate(`/`)}
              >
                Return to menu 
              </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
