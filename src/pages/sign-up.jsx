import React, { useState, useRef } from "react"
import Helmet from "react-helmet"
import { Link, navigate } from "gatsby"

import API from "../helpers/api"
import Layouts from "../layouts"
import MainLogo from "../assets/images/logo.png"
import CompactLogo from "../assets/images/compactLogo.png"

export default function SignUp(props) {
  const formRef = useRef()
  const [email, setEmail] = useState(null)
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const register = async e => {
    e.preventDefault()
    try {
      const data = await API.post("/user/createUser", {
        email,
        userName,
        password,
      })
      formRef.current.reset()
      alert("you have registered successfully.")
    } catch (error) {
      console.log(error)
      alert("Email or password already in use.")
    }
  }

  return (
    <>
      <Helmet>
        <title>Lenos Log</title>
        <meta name="description" content="Example" />
      </Helmet>
      <Layouts location={props.location}> 
        <div className="sign-up">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <img src={MainLogo} alt="Example Company Logo" id="SMainLogo" />
                <h1 id="SignUpSlogan">You can do it when you Lenos Log it.</h1>
                <button id="SignUpBtnX"><Link to="/login">Already Signed Up?</Link></button>
              </div>
              <div className="col-7">
                <form ref={formRef} id="SignUpForm" onSubmit={register}>
                  <table>
                    <tbody>
                      <tr>
                        <th id="SignUpFor">
                          <h3>Sign Up For</h3>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <h3 id="SLenosLog">Lenos Log</h3>
                        </td>
                        <td>
                          <img
                            src={CompactLogo}
                            alt="Example Company Logo"
                            id="SCompactLogo"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Email Address:</label>
                        </td>
                        <td>
                          <input
                            type="email"
                            placeholder="JohnSmith123@example.com"
                            onChange={e => {
                              setEmail(e.target.value)
                            }}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Username:</label>
                        </td>
                        <td>
                          <input
                            placeholder="6 or more characters"
                            onChange={e => {
                              setUserName(e.target.value)
                            }}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Password:</label>
                        </td>
                        <td>
                          <input
                            type="password"
                            placeholder="Minimum of 8 characters (mixture of letters/ numbers"
                            onChange={e => {
                              setPassword(e.target.value)
                            }}
                            maxLength="8"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Confirm Password:</label>
                        </td>
                        <td>
                          <input
                            type="password"
                            placeholder="Verify Password"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type="submit" id="SignUpBtn">
                            Sign me up!
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  )
}
