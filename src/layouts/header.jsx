import React, { useEffect } from "react"
import cookie from "js-cookie"
import { Link, navigate } from "gatsby"

const Header = ({ location }) => {
  const user = cookie.getJSON("user")

  const logOut = () => {
    cookie.remove("user")
    navigate("/login")
  }

  useEffect(() => {
    if (!user && !["/", "/sign-up"].includes(location?.pathname)) {
      navigate("/login")
    }
  }, [user])

  return (
    <nav className="navbar bg-dark justify-content-lg-between">
      <img
        className="navbar_img"
        src={require("../assets/images/logo.png")}
        alt="Example Company Logo"
      />
      <h2 className="text-white">Lenos Log</h2>
      <ul className="navbar-nav d-flex flex-row mb-0">
        {!user?.userId ? (
          <>
            <li className="px-2">
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li className="px-2">
              <Link to="/login">Log In</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <span className="mr-2 text-white">Hi, {user?.userName}</span>
            </li>
            <li>
              <a href="#" onClick={logOut}>
                Sign Out
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Header
